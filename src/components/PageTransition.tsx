
import React, { useState, useEffect } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger the animation after a brief delay to ensure DOM is ready
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`transition-all duration-1000 ease-out ${
        isLoaded 
          ? 'opacity-100 transform translate-y-0 scale-100' 
          : 'opacity-0 transform translate-y-8 scale-95'
      }`}
    >
      {children}
    </div>
  );
};

export default PageTransition;
