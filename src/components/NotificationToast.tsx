import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface NotificationToastProps {
  message: string | null;
  onClose: () => void;
}

export const NotificationToast: React.FC<NotificationToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-neutral-900 border border-[#FF1E27]/50 text-white rounded-lg shadow-2xl backdrop-blur-md animate-fade-in"
    >
      <CheckCircle2 className="w-5 h-5 text-[#FF1E27] shrink-0" />
      <span className="text-sm font-medium">{message}</span>
      <button
        onClick={onClose}
        className="p-1 text-neutral-400 hover:text-white rounded focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
        aria-label="Dismiss toast"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
