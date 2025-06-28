
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
  wordDelay = 30
}) => {
  const [visibleWords, setVisibleWords] = useState(0);
  
  // Split text into paragraphs and then words, preserving structure
  const paragraphs = text.split('\n\n');
  const allWords: Array<{word: string, isNewParagraph: boolean}> = [];
  
  paragraphs.forEach((paragraph, paragraphIndex) => {
    const words = paragraph.split(' ');
    words.forEach((word, wordIndex) => {
      allWords.push({
        word,
        isNewParagraph: paragraphIndex > 0 && wordIndex === 0
      });
    });
  });

  useEffect(() => {
    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setVisibleWords((prev) => {
          if (prev >= allWords.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, wordDelay);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [allWords.length, delay, wordDelay]);

  return (
    <div className={className}>
      {allWords.map((item, index) => (
        <React.Fragment key={index}>
          {item.isNewParagraph && <br /><br />}
          <span
            className={`inline-block transition-all duration-200 ${
              index < visibleWords 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-1'
            }`}
          >
            {item.word}
            {index < allWords.length - 1 && ' '}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
};

export default WordByWordText;
