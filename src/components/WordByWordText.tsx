
import React, { useState, useEffect } from 'react';

interface WordByWordTextProps {
  text: string;
  className?: string;
  delay?: number;
  wordDelay?: number;
}

const WordByWordText: React.FC<WordByWordTextProps> = ({ 
  text, 
  className = '', 
  delay = 500,
  wordDelay = 120
}) => {
  const [visibleWords, setVisibleWords] = useState(0);
  
  // Split text into words, preserving paragraph structure
  const words = text.split(/\s+/);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleWords((prev) => {
          if (prev >= words.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, wordDelay);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [words.length, delay, wordDelay]);

  return (
    <div className={className}>
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <span
            className={`inline-block transition-all duration-200 mr-1 ${
              index < visibleWords 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-1'
            } ${
              index === visibleWords - 1 && visibleWords < words.length
                ? 'glare-slide'
                : ''
            }`}
          >
            {word}
          </span>
          {word.endsWith('.') && index < words.length - 1 && <br />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default WordByWordText;
