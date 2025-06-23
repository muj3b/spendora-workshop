
import React, { useState, useEffect } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showBubble, setShowBubble] = useState(true);

  useEffect(() => {
    // Start the bubble animation
    const bubbleTimer = setTimeout(() => {
      setShowBubble(false);
      setIsLoaded(true);
    }, 1200);

    return () => clearTimeout(bubbleTimer);
  }, []);

  return (
    <>
      {/* Bubble Animation */}
      <div 
        className={`fixed inset-0 z-50 pointer-events-none transition-all duration-1000 ease-out ${
          showBubble 
            ? 'opacity-100' 
            : 'opacity-0'
        }`}
      >
        <div 
          className={`absolute bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000 ease-out ${
            showBubble 
              ? 'bottom-10 left-1/2 transform -translate-x-1/2 w-16 h-16' 
              : 'bottom-0 left-0 w-full h-full scale-150'
          }`}
        />
      </div>

      {/* Page Content */}
      <div 
        className={`transition-all duration-800 ease-out ${
          isLoaded 
            ? 'opacity-100 transform translate-y-0' 
            : 'opacity-0 transform translate-y-4'
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default PageTransition;
