import { useState, useCallback } from 'react';

export interface ToastItem {
  id: string;
  message: string;
  type?: 'success' | 'info' | 'warning';
}

let toastListeners: Array<(toast: ToastItem) => void> = [];

export function showToast(message: string, type: 'success' | 'info' | 'warning' = 'info') {
  const toast: ToastItem = {
    id: Math.random().toString(36).substring(2, 9),
    message,
    type,
  };
  toastListeners.forEach(listener => listener(toast));
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = useCallback((toast: ToastItem) => {
    setToasts(prev => [...prev, toast]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== toast.id));
    }, 3200);
  }, []);

  const subscribe = useCallback(() => {
    toastListeners.push(addToast);
    return () => {
      toastListeners = toastListeners.filter(l => l !== addToast);
    };
  }, [addToast]);

  return { toasts, subscribe, showToast };
}
