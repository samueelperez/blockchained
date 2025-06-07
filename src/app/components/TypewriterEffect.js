"use client";

import React, { useState, useEffect, useRef } from 'react';

export default function TypewriterEffect({ 
  words = [], 
  typingSpeed = 100, 
  deletingSpeed = 80, 
  pauseTime = 1500 
}) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  const timeoutRef = useRef(null);
  
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);
  
  useEffect(() => {
    // Safety check for empty words array
    if (!words.length) return;
    
    const currentWord = words[currentWordIndex];
    
    // Clear any existing timeout
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    if (isPaused) {
      // If paused, wait before starting to delete
      timeoutRef.current = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseTime);
      return;
    }
    
    if (isDeleting) {
      // Deleting mode
      if (displayText === '') {
        // When fully deleted, move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setCurrentIndex(0);
      } else {
        // Delete one character
        timeoutRef.current = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deletingSpeed);
      }
    } else {
      // Typing mode
      if (displayText === currentWord) {
        // When fully typed, pause
        setIsPaused(true);
      } else {
        // Type next character
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, typingSpeed);
      }
    }
  }, [displayText, isDeleting, isPaused, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);
  
  // Initialize typing on first render or when words change
  useEffect(() => {
    if (words.length > 0 && displayText === '') {
      setDisplayText(words[0].charAt(0));
    }
  }, [words]);
  
  return <span>{displayText}</span>;
}
