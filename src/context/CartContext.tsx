import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { CartItem, CartRepository } from '../services/db/cartRepository';
import { useAuth } from './AuthContext';

interface AddItemParams {
  productId: string;
  productName: string;
  productImage?: string;
  selectedStore?: string;
  storeUrl?: string;
  unitPrice: number;
  quantity?: number;
}

interface CartContextType {
  items: CartItem[];
  totalCount: number;
  totalAmount: number;
  isOpen: boolean;
  isLoading: boolean;
  openCart: () => void;
  closeCart: () => void;
  toggleCart: () => void;
  addItem: (params: AddItemParams) => Promise<void>;
  removeItem: (itemId: string) => Promise<void>;
  updateQuantity: (itemId: string, newQuantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const GUEST_ID_KEY = 'thecoffeescore_guest_id';
const LOCAL_CART_KEY = 'thecoffeescore_local_cart';

function getOrCreateGuestId(): string {
  let guestId = localStorage.getItem(GUEST_ID_KEY);
  if (!guestId) {
    guestId = `guest_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    localStorage.setItem(GUEST_ID_KEY, guestId);
  }
  return guestId;
}

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [items, setItems] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem(LOCAL_CART_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const currentUserId = user ? user.id : getOrCreateGuestId();

  // Load cart from Turso DB or local storage
  const fetchCart = useCallback(async () => {
    try {
      setIsLoading(true);
      const dbItems = await CartRepository.getCartForUser(currentUserId);
      if (dbItems && dbItems.length > 0) {
        setItems(dbItems);
        localStorage.setItem(LOCAL_CART_KEY, JSON.stringify(dbItems));
      }
    } catch {
      // Fall back gracefully to localStorage
    } finally {
      setIsLoading(false);
    }
  }, [currentUserId]);

  // Merge guest cart into user account on login
  useEffect(() => {
    if (user) {
      const guestId = localStorage.getItem(GUEST_ID_KEY);
      if (guestId && guestId !== user.id) {
        CartRepository.mergeGuestCart(guestId, user.id)
          .then(() => {
            localStorage.removeItem(GUEST_ID_KEY);
            return fetchCart();
          })
          .catch(() => {});
      } else {
        fetchCart();
      }
    } else {
      fetchCart();
    }
  }, [user, fetchCart]);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_CART_KEY, JSON.stringify(items));
  }, [items]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  const toggleCart = () => setIsOpen(prev => !prev);

  const addItem = async (params: AddItemParams) => {
    const addQty = params.quantity || 1;
    const store = params.selectedStore || 'Tienda Oficial';
    const storeUrl = params.storeUrl || '#';

    // Optimistic UI update
    setItems(prevItems => {
      const existingIdx = prevItems.findIndex(
        i => i.productId === params.productId && i.selectedStore === store
      );

      if (existingIdx >= 0) {
        const updated = [...prevItems];
        updated[existingIdx] = {
          ...updated[existingIdx],
          quantity: updated[existingIdx].quantity + addQty,
          unitPrice: params.unitPrice,
          updatedAt: new Date().toISOString(),
        };
        return updated;
      }

      const newItem: CartItem = {
        id: `cart_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
        userId: currentUserId,
        productId: params.productId,
        productName: params.productName,
        productImage: params.productImage || '',
        selectedStore: store,
        storeUrl,
        unitPrice: params.unitPrice,
        quantity: addQty,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      return [newItem, ...prevItems];
    });

    // Auto open drawer to confirm addition
    setIsOpen(true);

    // Sync to Turso in background
    try {
      await CartRepository.addItem(currentUserId, {
        productId: params.productId,
        productName: params.productName,
        productImage: params.productImage,
        selectedStore: store,
        storeUrl,
        unitPrice: params.unitPrice,
        quantity: addQty,
      });
    } catch (err) {
      console.warn('Cart sync to Turso warning:', err);
    }
  };

  const updateQuantity = async (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      return await removeItem(itemId);
    }

    setItems(prev =>
      prev.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity, updatedAt: new Date().toISOString() } : item
      )
    );

    try {
      await CartRepository.updateQuantity(currentUserId, itemId, newQuantity);
    } catch (err) {
      console.warn('Update quantity in Turso error:', err);
    }
  };

  const removeItem = async (itemId: string) => {
    setItems(prev => prev.filter(item => item.id !== itemId));

    try {
      await CartRepository.removeItem(currentUserId, itemId);
    } catch (err) {
      console.warn('Remove item in Turso error:', err);
    }
  };

  const clearCart = async () => {
    setItems([]);
    localStorage.removeItem(LOCAL_CART_KEY);

    try {
      await CartRepository.clearCart(currentUserId);
    } catch (err) {
      console.warn('Clear cart in Turso error:', err);
    }
  };

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = Math.round(items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0) * 100) / 100;

  return (
    <CartContext.Provider
      value={{
        items,
        totalCount,
        totalAmount,
        isOpen,
        isLoading,
        openCart,
        closeCart,
        toggleCart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
