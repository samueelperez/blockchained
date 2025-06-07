"use client";

import { useState, useEffect } from 'react';

export default function TypewriterEffect({ words, typingSpeed = 150, deletingSpeed = 100, pauseTime = 2000 }) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    
    const timer = setTimeout(() => {
      if (isWaiting) {
        setIsWaiting(false);
        setIsDeleting(true);
        return;
      }
      
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        
        if (text.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setText(currentWord.substring(0, text.length + 1));
        
        if (text.length === currentWord.length) {
          setIsWaiting(true);
        }
      }
    }, isWaiting ? pauseTime : isDeleting ? deletingSpeed : typingSpeed);
    
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, isWaiting, words, typingSpeed, deletingSpeed, pauseTime]);
  
  return <span>{text}</span>;
}
