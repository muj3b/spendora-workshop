import { useEffect } from 'react';

export const useScrollBlur = () => {
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let isScrolling = false;

    const handleScroll = () => {
      if (!isScrolling) {
        document.body.classList.add('motion-blur');
        isScrolling = true;
      }

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        document.body.classList.remove('motion-blur');
        isScrolling = false;
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
      document.body.classList.remove('motion-blur');
    };
  }, []);
};