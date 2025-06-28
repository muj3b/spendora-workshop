
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
  wordDelay = 80
}) => {
  const [visibleWords, setVisibleWords] = useState(0);
  const words = text.split(' ');

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
        <span
          key={index}
          className={`inline-block transition-all duration-300 ${
            index < visibleWords 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-2'
          }`}
        >
          {word}
          {index < words.length - 1 && ' '}
        </span>
      ))}
    </div>
  );
};

export default WordByWordText;
