"use client";

import React, { useState, useEffect, useRef } from 'react';

export default function TypewriterEffect({ 
  words, 
  typingSpeed = 100, 
  deletingSpeed = 80, 
  pauseTime = 1500 
}) {
  const [currentText, setCurrentText] = useState(words[0] ? words[0][0] || '' : '');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);
  
  // Use a ref to track the current timeout
  const timeoutRef = useRef(null);
  
  useEffect(() => {
    // Clear any existing timeout when component unmounts or dependencies change
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);
  
  useEffect(() => {
    const currentWord = words[wordIndex];
    
    const handleTyping = () => {
      // Clear any existing timeout
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      
      if (isWaiting) {
        // If waiting, set a timeout to start deleting
        timeoutRef.current = setTimeout(() => {
          setIsWaiting(false);
          setIsDeleting(true);
        }, pauseTime);
        return;
      }
      
      if (isDeleting) {
        // Deleting text
        if (currentText.length === 0) {
          // Move to the next word when done deleting
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        } else {
          // Delete one character
          setCurrentText(currentText.slice(0, -1));
          timeoutRef.current = setTimeout(handleTyping, deletingSpeed);
        }
      } else {
        // Typing text
        if (currentText === currentWord) {
          // Pause at the end of the word
          setIsWaiting(true);
          timeoutRef.current = setTimeout(handleTyping, pauseTime);
        } else {
          // Add one character
          setCurrentText(currentWord.slice(0, currentText.length + 1));
          timeoutRef.current = setTimeout(handleTyping, typingSpeed);
        }
      }
    };
    
    // Start the typing effect
    handleTyping();
    
    // Cleanup function
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentText, isDeleting, isWaiting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);
  
  return <span>{currentText}</span>;
}
