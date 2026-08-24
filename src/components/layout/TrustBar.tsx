import React from 'react';

export const TrustBar: React.FC = () => {
  return (
    <div className="brands py-5 sm:py-6">
      <div className="brands-inner flex items-center justify-between gap-10 sm:gap-14 overflow-x-auto">
        {/* Sage */}
        <div className="flex items-center opacity-85 hover:opacity-100 transition-opacity cursor-default shrink-0">
          <svg className="h-7 sm:h-8 w-auto" viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="24" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="24" fontWeight="800" letterSpacing="-0.5px" fill="#111111">Sage</text>
          </svg>
        </div>

        {/* LELIT */}
        <div className="flex items-center opacity-85 hover:opacity-100 transition-opacity cursor-default shrink-0">
          <svg className="h-7 sm:h-8 w-auto" viewBox="0 0 120 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="16" r="7" stroke="#e94e2b" strokeWidth="2.5" strokeDasharray="3 2" />
            <text x="24" y="23" fontFamily="'Inter', sans-serif" fontSize="20" fontWeight="900" letterSpacing="1px" fill="#111111">LELIT</text>
          </svg>
        </div>

        {/* De'Longhi */}
        <div className="flex items-center opacity-85 hover:opacity-100 transition-opacity cursor-default shrink-0">
          <svg className="h-7 sm:h-8 w-auto" viewBox="0 0 150 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="4" width="144" height="24" rx="12" fill="#111111" />
            <text x="72" y="20" textAnchor="middle" fontFamily="'Inter', serif" fontSize="13" fontWeight="800" letterSpacing="0.5px" fill="#ffffff">De'Longhi</text>
          </svg>
        </div>

        {/* Breville */}
        <div className="flex items-center opacity-85 hover:opacity-100 transition-opacity cursor-default shrink-0">
          <svg className="h-7 sm:h-8 w-auto" viewBox="0 0 125 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="23" fontFamily="'Inter', sans-serif" fontSize="21" fontWeight="800" fontStyle="italic" letterSpacing="-0.5px" fill="#111111">Breville</text>
          </svg>
        </div>

        {/* MAZZER */}
        <div className="flex items-center opacity-85 hover:opacity-100 transition-opacity cursor-default shrink-0">
          <svg className="h-7 sm:h-8 w-auto" viewBox="0 0 135 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="23" fontFamily="'Inter', sans-serif" fontSize="19" fontWeight="900" letterSpacing="2px" fill="#111111">MAZZER</text>
          </svg>
        </div>

        {/* eureka */}
        <div className="flex items-center opacity-85 hover:opacity-100 transition-opacity cursor-default shrink-0">
          <svg className="h-7 sm:h-8 w-auto" viewBox="0 0 125 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="23" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="22" fontWeight="800" letterSpacing="-0.5px" fill="#111111">eureka</text>
            <text x="82" y="23" fontFamily="'Inter', sans-serif" fontSize="9" fontWeight="700" fill="#e94e2b">1920</text>
          </svg>
        </div>

        {/* FELLOW */}
        <div className="flex items-center opacity-85 hover:opacity-100 transition-opacity cursor-default shrink-0">
          <svg className="h-7 sm:h-8 w-auto" viewBox="0 0 130 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="23" fontFamily="'Inter', sans-serif" fontSize="18" fontWeight="900" letterSpacing="4px" fill="#111111">FELLOW</text>
          </svg>
        </div>

        {/* COMANDANTE */}
        <div className="flex items-center opacity-85 hover:opacity-100 transition-opacity cursor-default shrink-0">
          <svg className="h-7 sm:h-8 w-auto" viewBox="0 0 170 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 12h12M0 16h12M0 20h12" stroke="#111111" strokeWidth="2" />
            <text x="20" y="22" fontFamily="'Inter', sans-serif" fontSize="14" fontWeight="900" letterSpacing="2.5px" fill="#111111">COMANDANTE</text>
            <path d="M158 12h12M158 16h12M158 20h12" stroke="#111111" strokeWidth="2" />
          </svg>
        </div>

        {/* AEROPRESS */}
        <div className="flex items-center opacity-85 hover:opacity-100 transition-opacity cursor-default shrink-0">
          <svg className="h-7 sm:h-8 w-auto" viewBox="0 0 150 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="23" fontFamily="'Inter', sans-serif" fontSize="18" fontWeight="900" fontStyle="italic" letterSpacing="1px" fill="#e94e2b">AEROPRESS</text>
          </svg>
        </div>

        {/* LA MARZOCCO */}
        <div className="flex items-center opacity-85 hover:opacity-100 transition-opacity cursor-default shrink-0">
          <svg className="h-7 sm:h-8 w-auto" viewBox="0 0 160 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="22" fontFamily="'Georgia', serif" fontSize="15" fontWeight="700" letterSpacing="1px" fill="#111111">LA MARZOCCO</text>
          </svg>
        </div>

        {/* MAHLKÖNIG */}
        <div className="flex items-center opacity-85 hover:opacity-100 transition-opacity cursor-default shrink-0">
          <svg className="h-7 sm:h-8 w-auto" viewBox="0 0 160 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polygon points="6,6 10,14 16,4 22,14 26,6 26,18 6,18" fill="#111111" />
            <text x="34" y="22" fontFamily="'Inter', sans-serif" fontSize="14" fontWeight="800" letterSpacing="1px" fill="#111111">MAHLKÖNIG</text>
          </svg>
        </div>
      </div>
    </div>
  );
};
