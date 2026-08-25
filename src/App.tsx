import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ComparatorProvider } from './hooks/useComparator';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ToastContainer } from './components/ui/ToastContainer';
import { ComparisonDrawer } from './components/comparator/ComparisonDrawer';
import { CookieConsentBanner } from './components/legal/CookieConsentBanner';

// Pages
import { HomePage } from './pages/HomePage';
import { ComparatorPage } from './pages/ComparatorPage';
import { CategoryListingPage } from './pages/CategoryListingPage';
import { CoffeePage } from './pages/CoffeePage';
import { DealsPage } from './pages/DealsPage';
import { GuidesPage } from './pages/GuidesPage';
import { BlogPage } from './pages/BlogPage';
import { GlobalCoffeeIndexPage } from './pages/GlobalCoffeeIndexPage';
import { ProductDetailPage } from './pages/ProductDetailPage';

export const App: React.FC = () => {
  return (
    <ComparatorProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-paper text-ink font-sans">
          <Header />

          <main className="flex-1">
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
                    subtitle="Básculas de precisión, hervidores cuello de cisne, tampers autonivelantes y herramientas WDT para optimizar cada shot."
                    chips={['Todas', 'Cafeteras manuales', 'Hervidores', 'Herramientas de barista']}
                  />
                }
              />
              <Route path="/cafe" element={<CoffeePage />} />
              <Route path="/ofertas" element={<DealsPage />} />
              <Route path="/guias" element={<GuidesPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/indice-global" element={<GlobalCoffeeIndexPage />} />
              <Route path="/cafeterias" element={<GlobalCoffeeIndexPage />} />
              <Route path="/producto/:slug" element={<ProductDetailPage />} />
            </Routes>
          </main>

          <Footer />
          <ComparisonDrawer />
          <ToastContainer />
          <CookieConsentBanner />
        </div>
      </BrowserRouter>
    </ComparatorProvider>
  );
};

export default App;
