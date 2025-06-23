
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
    }, 500);

    // Phase 2: Droplet moves to center and grows slightly
    const phase2Timer = setTimeout(() => {
      setAnimationPhase('expand');
    }, 2500);

    // Phase 3: Final expansion to fill screen
    const phase3Timer = setTimeout(() => {
      setAnimationPhase('done');
      setIsLoaded(true);
    }, 4500);

    return () => {
      clearTimeout(phase1Timer);
      clearTimeout(phase2Timer);
      clearTimeout(phase3Timer);
    };
  }, []);

  const getDropletStyles = () => {
    switch (animationPhase) {
      case 'start':
        return 'bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full';
      case 'middle':
        return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full';
      case 'expand':
        return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full scale-150 rounded-none';
      case 'done':
        return 'top-0 left-0 w-full h-full scale-150 rounded-none';
      default:
        return '';
    }
  };

  return (
    <>
      {/* Water Droplet Animation */}
      <div 
        className={`fixed inset-0 z-50 pointer-events-none transition-all duration-1000 ease-out ${
          animationPhase === 'done' 
            ? 'opacity-0' 
            : 'opacity-100'
        }`}
      >
        <div 
          className={`absolute bg-gradient-to-t from-blue-500 via-blue-600 to-purple-600 transition-all duration-[2000ms] ease-out ${getDropletStyles()}`}
        />
      </div>

      {/* Page Content */}
      <div 
        className={`transition-all duration-1000 ease-out ${
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
