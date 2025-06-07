"use client";

import React, { useState, useEffect } from 'react';

export default function TypewriterEffect({ words }) {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [words]);
  
  return <span>{words[index] || words[0]}</span>;
}
