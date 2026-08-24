import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  maxWidth?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  maxWidth = 'max-w-lg',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-ink/50 backdrop-blur-sm transition-opacity animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div
        className={`relative w-full ${maxWidth} bg-white rounded-editorial border border-stone-200 shadow-2xl p-6 z-10 max-h-[90vh] overflow-y-auto transform transition-all animate-scaleUp`}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-serif font-bold text-xl text-ink leading-tight">{title}</h3>
            {subtitle && <p className="text-xs text-ink-muted mt-0.5">{subtitle}</p>}
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-paper-secondary hover:bg-stone-200 flex items-center justify-center text-ink-muted hover:text-ink transition-colors"
            aria-label="Cerrar modal"
          >
            <X size={16} />
          </button>
        </div>

        {children}
      </div>
    </div>
  );
};
