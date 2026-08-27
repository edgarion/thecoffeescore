import React, { useEffect } from 'react';
import { useToast } from '../../hooks/useToast';

export const ToastContainer: React.FC = () => {
  const { toasts, subscribe } = useToast();

  useEffect(() => {
    return subscribe();
  }, [subscribe]);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 pointer-events-none max-w-sm w-full">
      {toasts.map(toast => {
        let borderClass = 'border-stone-800 bg-ink text-white';

        if (toast.type === 'success') {
          borderClass = 'border-stone-800 bg-ink text-white';
        } else if (toast.type === 'warning') {
          borderClass = 'border-editorial-red/80 bg-ink text-white';
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center px-4 py-3 rounded-editorial border shadow-xl text-xs font-medium animate-slideUp ${borderClass}`}
          >
            <span className="flex-1 leading-snug">{toast.message}</span>
          </div>
        );
      })}
    </div>
  );
};
