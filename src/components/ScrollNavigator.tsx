import React, { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScrollNavigator = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const sections = [
    { id: 'features', label: 'Features' },
    { id: 'about-spendora', label: 'About' },
    { id: 'workshop-schedule', label: 'Schedule' },
    { id: 'meet-the-team', label: 'Team' }
  ];

  const scrollToSection = () => {
    const nextSection = currentSection + 1;
    
    if (nextSection >= sections.length) {
      // Scroll to top and reset
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setCurrentSection(0);
      return;
    }

    const sectionId = sections[nextSection].id;
    const element = document.getElementById(sectionId);
    
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(nextSection);
    }
  };

  return (
    <Button
      onClick={scrollToSection}
      size="icon"
      variant="default"
      className="fixed bottom-6 right-6 z-50 rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300 bg-primary hover:bg-primary/90"
      aria-label={`Scroll to ${sections[currentSection]?.label || 'top'}`}
    >
      <ArrowDown className="w-5 h-5" />
    </Button>
  );
};

export default ScrollNavigator;