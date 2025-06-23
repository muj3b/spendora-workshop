
import React, { useState, useEffect } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLiquid, setShowLiquid] = useState(true);

  useEffect(() => {
    // Start the liquid animation
    const liquidTimer = setTimeout(() => {
      setShowLiquid(false);
      setIsLoaded(true);
    }, 2000);

    return () => clearTimeout(liquidTimer);
  }, []);

  return (
    <>
      {/* Liquid Animation */}
      <div 
        className={`fixed inset-0 z-50 pointer-events-none transition-all duration-1000 ease-out ${
          showLiquid 
            ? 'opacity-100' 
            : 'opacity-0'
        }`}
      >
        <div 
          className={`absolute bg-gradient-to-t from-blue-500 via-blue-600 to-purple-600 transition-all duration-[2000ms] ease-out ${
            showLiquid 
              ? 'bottom-0 left-0 w-full h-20 rounded-t-full' 
              : 'bottom-0 left-0 w-full h-full scale-110'
          }`}
          style={{
            clipPath: showLiquid 
              ? 'ellipse(100% 100% at 50% 100%)' 
              : 'ellipse(150% 150% at 50% 50%)'
          }}
        />
      </div>

      {/* Page Content */}
      <div 
        className={`transition-all duration-1000 ease-out delay-500 ${
          isLoaded 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-8'
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default PageTransition;
