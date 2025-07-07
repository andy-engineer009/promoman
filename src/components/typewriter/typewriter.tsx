'use client'
import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({
  words = ['Hello', 'Mak', 'How'],
  typingSpeed = 150,
  deletingSpeed = 50,
  delayBetweenWords = 1000,
}) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [typingDelay, setTypingDelay] = useState(typingSpeed);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing logic
        setText(currentWord.substring(0, text.length + 1));
        setTypingDelay(typingSpeed);
        
        if (text === currentWord) {
          // Switch to deleting after delay
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else {
        // Deleting logic
        setText(currentWord.substring(0, text.length - 1));
        setTypingDelay(deletingSpeed);
        
        if (text === '') {
          setIsDeleting(false);
          setWordIndex(wordIndex + 1);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingDelay);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return (
    <span className="typewriter-text">
      {text}
      <span className="blinking-cursor">|</span>
    </span>
  );
};

export default Typewriter;