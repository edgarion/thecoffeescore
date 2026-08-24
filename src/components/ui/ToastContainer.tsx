import React, { useEffect } from 'react';
import { useToast } from '../../hooks/useToast';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';

export const ToastContainer: React.FC = () => {
  const { toasts, subscribe } = useToast();

  useEffect(() => {
    return subscribe();
  }, [subscribe]);

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2.5 pointer-events-none max-w-sm w-full">
      {toasts.map(toast => {
        let Icon = Info;
        let borderClass = 'border-stone-800 bg-ink text-white';

        if (toast.type === 'success') {
          Icon = CheckCircle2;
          borderClass = 'border-stone-800 bg-ink text-white';
        } else if (toast.type === 'warning') {
          Icon = AlertCircle;
          borderClass = 'border-editorial-red/80 bg-ink text-white';
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-editorial border shadow-xl text-xs font-medium animate-slideUp ${borderClass}`}
          >
            <Icon size={16} className="shrink-0 text-editorial-blue" />
            <span className="flex-1 leading-snug">{toast.message}</span>
          </div>
        );
      })}
    </div>
  );
};
