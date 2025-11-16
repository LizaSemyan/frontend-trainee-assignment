import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useItemKeyboardNavigation = (prevId?: number | null, nextId?: number | null) => {
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && nextId) {
        navigate(`/item/${nextId}`);
      }
      if (e.key === 'ArrowLeft' && prevId) {
        navigate(`/item/${prevId}`);
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [prevId, nextId, navigate]);
};
