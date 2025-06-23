
import React, { useState, useEffect } from 'react';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [animationPhase, setAnimationPhase] = useState('start'); // 'start', 'rise', 'expand', 'welcome', 'done'

  useEffect(() => {
    // Phase 1: Small droplet appears at bottom center
    const phase1Timer = setTimeout(() => {
      setAnimationPhase('rise');
    }, 200);

    // Phase 2: Droplet smoothly rises to center
    const phase2Timer = setTimeout(() => {
      setAnimationPhase('expand');
    }, 1000);

    // Phase 3: Expansion to fill screen
    const phase3Timer = setTimeout(() => {
      setAnimationPhase('welcome');
      setShowWelcome(true);
    }, 1800);

    // Phase 4: Show welcome text
    const phase4Timer = setTimeout(() => {
      setShowWelcome(false);
      setAnimationPhase('done');
      setIsLoaded(true);
    }, 3200);

    return () => {
      clearTimeout(phase1Timer);
      clearTimeout(phase2Timer);
      clearTimeout(phase3Timer);
      clearTimeout(phase4Timer);
    };
  }, []);

  const getDropletStyles = () => {
    switch (animationPhase) {
      case 'start':
        return 'bottom-8 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full opacity-80';
      case 'rise':
        return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full opacity-90';
      case 'expand':
        return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-screen h-screen scale-150 rounded-none opacity-100';
      case 'welcome':
        return 'top-0 left-0 w-full h-full scale-150 rounded-none opacity-100';
      case 'done':
        return 'top-0 left-0 w-full h-full scale-150 rounded-none opacity-0';
      default:
        return '';
    }
  };

  const getTransitionDuration = () => {
    switch (animationPhase) {
      case 'start':
        return 'duration-200';
      case 'rise':
        return 'duration-[800ms]';
      case 'expand':
        return 'duration-[800ms]';
      case 'welcome':
        return 'duration-500';
      case 'done':
        return 'duration-[1400ms]';
      default:
        return 'duration-700';
    }
  };

  return (
    <>
      {/* Water Droplet Animation */}
      <div 
        className={`fixed inset-0 z-50 pointer-events-none transition-all ease-in-out ${
          animationPhase === 'done' 
            ? 'opacity-0' 
            : 'opacity-100'
        }`}
      >
        <div 
          className={`absolute bg-gradient-to-t from-blue-500 via-blue-600 to-purple-600 transition-all ease-in-out ${getDropletStyles()} ${getTransitionDuration()}`}
          style={{
            filter: animationPhase === 'rise' ? 'blur(1px)' : 'blur(0px)',
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)',
          }}
        />
      </div>

      {/* Welcome Text */}
      {showWelcome && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center pointer-events-none">
          <h1 className="text-6xl md:text-8xl font-bold text-white animate-fade-in">
            Welcome
          </h1>
        </div>
      )}

      {/* Page Content */}
      <div 
        className={`transition-all duration-[1000ms] ease-out ${
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
