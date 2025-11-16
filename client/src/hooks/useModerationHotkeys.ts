import { useEffect } from 'react';

interface UseModerationHotkeysProps {
  onApprove: () => void;
  onReject: () => void;
  onRequestChanges: () => void;
}

export const useModerationHotkeys = ({
  onApprove,
  onReject,
  onRequestChanges,
}: UseModerationHotkeysProps) => {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'a' || e.key === 'A') {
        onApprove();
      }

      if (e.key === 'd' || e.key === 'D') {
        onReject();
      }

      if (e.key === 'w' || e.key === 'W') {
        onRequestChanges();
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onApprove, onReject, onRequestChanges]);
};
