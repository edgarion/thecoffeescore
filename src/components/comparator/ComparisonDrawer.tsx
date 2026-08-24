import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GitCompare, X, ArrowRight } from 'lucide-react';
import { useComparator } from '../../hooks/useComparator';

export const ComparisonDrawer: React.FC = () => {
  const { selectedProducts, removeProduct, clear } = useComparator();
  const location = useLocation();

  // Don't show floating drawer if already on /comparador page or if 0 items
  if (selectedProducts.length === 0 || location.pathname === '/comparador') {
    return null;
  }

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 50,
        background: '#ffffff',
        border: '1.5px solid var(--ink)',
        borderRadius: 40,
        boxShadow: '0 16px 40px rgba(0,0,0,0.18)',
        padding: '10px 22px',
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        maxWidth: '92vw',
      }}
      className="animate-slideUp"
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>
        <GitCompare size={18} style={{ color: 'var(--blue)' }} />
        <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>
          Comparando ({selectedProducts.length}/4):
        </span>
      </div>

      <div className="hidden sm:flex items-center gap-2 overflow-x-auto">
        {selectedProducts.map(p => (
          <div
            key={p.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              background: 'var(--cream)',
              borderRadius: 20,
              padding: '4px 12px',
              fontSize: '0.78rem',
              fontWeight: 600,
              border: '1px solid var(--line)',
            }}
          >
            <span style={{ maxWidth: 110, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {p.name}
            </span>
            <button
              onClick={() => removeProduct(p.id)}
              style={{
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                color: 'var(--muted)',
                display: 'flex',
                alignItems: 'center',
              }}
              title="Quitar"
            >
              <X size={13} />
            </button>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 'auto', flexShrink: 0 }}>
        <Link
          to="/comparador"
          className="btn btn-solid"
          style={{
            padding: '7px 16px',
            fontSize: '0.8rem',
            borderRadius: 20,
          }}
        >
          <span>Ver tabla</span>
          <ArrowRight size={13} />
        </Link>
        <button
          onClick={clear}
          style={{
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            color: 'var(--muted)',
            padding: 4,
          }}
          title="Vaciar comparador"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};
