
import React, { useState, useEffect } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [animationPhase, setAnimationPhase] = useState('start'); // 'start', 'middle', 'expand', 'done'

  useEffect(() => {
    // Phase 1: Small droplet appears at bottom center
    const phase1Timer = setTimeout(() => {
      setAnimationPhase('middle');
    }, 300);

    // Phase 2: Droplet moves to center and grows slightly
    const phase2Timer = setTimeout(() => {
      setAnimationPhase('expand');
    }, 1200);

    // Phase 3: Final expansion to fill screen
    const phase3Timer = setTimeout(() => {
      setAnimationPhase('done');
      setIsLoaded(true);
    }, 2000);

    return () => {
      clearTimeout(phase1Timer);
      clearTimeout(phase2Timer);
      clearTimeout(phase3Timer);
    };
  }, []);

  const getDropletStyles = () => {
    switch (animationPhase) {
      case 'start':
        return 'bottom-8 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full opacity-90';
      case 'middle':
        return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full opacity-95';
      case 'expand':
        return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen scale-110 rounded-none opacity-100';
      case 'done':
        return 'top-0 left-0 w-full h-full scale-110 rounded-none opacity-0';
      default:
        return '';
    }
  };

  return (
    <>
      {/* Water Droplet Animation */}
      <div 
        className={`fixed inset-0 z-50 pointer-events-none transition-all duration-700 ease-in-out ${
          animationPhase === 'done' 
            ? 'opacity-0' 
            : 'opacity-100'
        }`}
      >
        <div 
          className={`absolute bg-gradient-to-t from-blue-500 via-blue-600 to-purple-600 transition-all duration-700 ease-in-out filter blur-sm ${getDropletStyles()}`}
          style={{
            filter: animationPhase === 'middle' ? 'blur(0.5px)' : 'blur(0px)',
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
          }}
        />
      </div>

      {/* Page Content */}
      <div 
        className={`transition-all duration-500 ease-out ${
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
