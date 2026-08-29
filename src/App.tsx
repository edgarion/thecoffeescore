import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { ComparatorProvider } from './hooks/useComparator';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ToastContainer } from './components/ui/ToastContainer';
import { ComparisonDrawer } from './components/comparator/ComparisonDrawer';
import { CookieConsentBanner } from './components/legal/CookieConsentBanner';
import { AuthModal } from './components/auth/AuthModal';
import { CartDrawer } from './components/cart/CartDrawer';
import { MobileBottomBar } from './components/layout/MobileBottomBar';

// Pages
import { HomePage } from './pages/HomePage';
import { ComparatorPage } from './pages/ComparatorPage';
import { CategoryListingPage } from './pages/CategoryListingPage';
import { CoffeePage } from './pages/CoffeePage';
import { DealsPage } from './pages/DealsPage';
import { GuidesPage } from './pages/GuidesPage';
import { BlogPage } from './pages/BlogPage';
import { GlobalCoffeeIndexPage } from './pages/GlobalCoffeeIndexPage';
import { B2BSuppliersPage } from './pages/B2BSuppliersPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { SetupConfiguratorPage } from './pages/SetupConfiguratorPage';
import { GuideDetailPage } from './pages/GuideDetailPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { RecipesPage } from './pages/RecipesPage';

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <ComparatorProvider>
          <BrowserRouter>
            <div className="min-h-screen flex flex-col bg-paper text-ink font-sans">
              <Header />

              <main className="flex-1 pb-16 lg:pb-0">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/comparador" element={<ComparatorPage />} />
                  <Route
                    path="/maquinas"
                    element={
                      <CategoryListingPage
                        category="maquinas"
                        title="Máquinas de Espresso"
                        subtitle="Desde modelos manuales compactos hasta máquinas profesionales de doble caldera con grupo comercial de 58 mm."
                        chips={['Todas', 'Manuales', 'Semiautomáticas', 'Superautomáticas', 'Con molinillo']}
                      />
                    }
                  />
                  <Route
                    path="/molinos"
                    element={
                      <CategoryListingPage
                        category="molinos"
                        title="Molinos de Café"
                        subtitle="Muelas planas y cónicas. Medimos uniformidad granulométrica, retención residual y precisión de microajuste."
                        chips={['Todas', 'Eléctricos', 'Manuales', 'Para espresso', 'Para filtro']}
                      />
                    }
                  />
                  <Route
                    path="/accesorios"
                    element={
                      <CategoryListingPage
                        category="accesorios"
                        title="Accesorios & Barismo"
                        subtitle="Filtros de especialidad, botellas de batch brew, medidores y básculas de precisión, jarras de latte art y herramientas de barista."
                        chips={['Todas', 'Herramientas de barista', 'Jarras & Servidores', 'Medidores & Básculas', 'Filtros y Papeles', 'Mantenimiento & Limpieza', 'Lifestyle']}
                      />
                    }
                  />
                  <Route path="/cafe" element={<CoffeePage />} />
                  <Route path="/ofertas" element={<DealsPage />} />
                  <Route path="/guias" element={<GuidesPage />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/blog/:slug" element={<BlogDetailPage />} />
                  <Route path="/recetas" element={<RecipesPage />} />
                  <Route path="/bebidas" element={<RecipesPage />} />
                  <Route path="/indice-global" element={<GlobalCoffeeIndexPage />} />
                  <Route path="/cafeterias" element={<GlobalCoffeeIndexPage />} />
                  <Route path="/b2b" element={<B2BSuppliersPage />} />
                  <Route path="/proveedores" element={<B2BSuppliersPage />} />
                  <Route path="/configurador" element={<SetupConfiguratorPage />} />
                  <Route path="/setup" element={<SetupConfiguratorPage />} />
                  <Route path="/guia/:slug" element={<GuideDetailPage />} />
                  <Route path="/producto/:slug" element={<ProductDetailPage />} />
                </Routes>
              </main>

              <Footer />
              <MobileBottomBar />
              <ComparisonDrawer />
              <CartDrawer />
              <AuthModal />
              <ToastContainer />
              <CookieConsentBanner />
            </div>
          </BrowserRouter>
        </ComparatorProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;

