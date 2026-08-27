import React, { useState, useEffect } from 'react';

export interface CookiePreferences {
  essential: boolean; // always true
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const STORAGE_KEY = 'tcs_cookie_consent_v2';

export const CookieConsentBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      // Delay slightly for smooth UX
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  // Listen for custom event to reopen settings from footer
  useEffect(() => {
    const handleReopen = () => {
      setIsVisible(true);
      setShowConfig(true);
    };
    window.addEventListener('openCookieSettings', handleReopen);
    return () => window.removeEventListener('openCookieSettings', handleReopen);
  }, []);

  const savePreferences = (prefs: { essential: boolean; analytics: boolean; marketing: boolean }) => {
    const data: CookiePreferences = {
      ...prefs,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setIsVisible(false);
    setShowConfig(false);
  };

  const handleAcceptAll = () => {
    savePreferences({ essential: true, analytics: true, marketing: true });
  };

  const handleRejectAll = () => {
    savePreferences({ essential: true, analytics: false, marketing: false });
  };

  const handleSaveCustom = () => {
    savePreferences({ essential: true, analytics, marketing });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[99999] p-3 sm:p-5 flex justify-center animate-slideUp">
      <div className="w-full max-w-3xl bg-[#fbfaf7] border-2 border-[#111111] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)] p-5 sm:p-7 flex flex-col gap-4 text-ink">
        {/* Banner Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-serif font-bold text-base sm:text-lg text-ink leading-tight">
              Privacidad y Gestión de Cookies
            </h3>
            <span className="text-[11px] text-[#6b6a63]">
              Conforme al RGPD (UE 2016/679) y Ley LSSI-CE (Art. 22.2)
            </span>
          </div>

          <button
            onClick={handleRejectAll}
            className="text-[#6b6a63] hover:text-ink font-bold text-xs p-1"
            title="Cerrar y rechazar no esenciales"
            aria-label="Cerrar banner"
          >
            ✕
          </button>
        </div>

        {/* Text Description */}
        <p className="text-xs sm:text-sm text-[#333] leading-relaxed">
          En <strong>thecoffeescore</strong> utilizamos cookies propias y de terceros técnicas, analíticas y de atribución de afiliados para garantizar el funcionamiento del comparador en tiempo real, analizar el tráfico web y ofrecer enlaces verificados a tiendas de café y equipamiento sin coste adicional para ti.
        </p>

        {/* Configuration Panel (Conditional) */}
        {showConfig && (
          <div className="space-y-3 pt-3 border-t border-[#e6e3da] bg-white/70 rounded-xl p-4 my-1">
            {/* 1. Essential */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xs text-ink">1. Cookies Técnicas y de Seguridad</span>
                  <span className="bg-stone-200 text-stone-700 text-[10px] font-bold px-2 py-0.5 rounded">Obligatorias</span>
                </div>
                <p className="text-[11px] text-[#6b6a63] mt-0.5">
                  Imprescindibles para recordar favoritos, productos en comparativa y proteger frente a ataques CSRF.
                </p>
              </div>
              <input type="checkbox" checked disabled className="w-4 h-4 accent-ink" />
            </div>

            {/* 2. Analytics */}
            <div className="flex items-center justify-between gap-4 pt-2 border-t border-[#e6e3da]/60">
              <div>
                <span className="font-bold text-xs text-ink">2. Cookies Analíticas y de Rendimiento</span>
                <p className="text-[11px] text-[#6b6a63] mt-0.5">
                  Nos permiten medir de forma 100% anónima qué productos se comparan más para mejorar el catálogo.
                </p>
              </div>
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="w-4 h-4 accent-ink cursor-pointer"
              />
            </div>

            {/* 3. Marketing / Affiliate */}
            <div className="flex items-center justify-between gap-4 pt-2 border-t border-[#e6e3da]/60">
              <div>
                <span className="font-bold text-xs text-ink">3. Cookies de Afiliación y Tiendas</span>
                <p className="text-[11px] text-[#6b6a63] mt-0.5">
                  Permiten validar la procedencia de los clics hacia Amazon, El Corte Inglés y tostadores oficiales.
                </p>
              </div>
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="w-4 h-4 accent-ink cursor-pointer"
              />
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-2 border-t border-[#e6e3da]">
          <button
            type="button"
            onClick={() => setShowConfig(!showConfig)}
            className="inline-flex items-center justify-center text-xs font-semibold text-[#6b6a63] hover:text-ink py-2 px-3 rounded-xl hover:bg-stone-200/50 transition-colors"
          >
            <span>{showConfig ? 'Ocultar ajustes' : 'Personalizar cookies'}</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleRejectAll}
              className="btn btn-outline flex-1 sm:flex-none !py-2.5 !px-4 !text-xs !rounded-xl"
            >
              Rechazar opcionales
            </button>

            {showConfig ? (
              <button
                type="button"
                onClick={handleSaveCustom}
                className="btn btn-solid flex-1 sm:flex-none !py-2.5 !px-5 !text-xs !rounded-xl"
              >
                Guardar preferencias
              </button>
            ) : (
              <button
                type="button"
                onClick={handleAcceptAll}
                className="btn btn-solid flex-1 sm:flex-none !py-2.5 !px-5 !text-xs !rounded-xl"
              >
                Aceptar todas
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Utility helper to reopen cookie banner from footer
 */
export const openCookieSettings = () => {
  window.dispatchEvent(new CustomEvent('openCookieSettings'));
};
