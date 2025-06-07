"use client";

import { useEffect, useRef, useState } from 'react';
import MouseTrail from './MouseTrail';

export default function MouseTrailHero() {
  const [isClient, setIsClient] = useState(false);
  const [isInHeroSection, setIsInHeroSection] = useState(true);
  
  useEffect(() => {
    setIsClient(true);
    
    // Function to check if mouse is in hero section
    const handleScroll = () => {
      // Get the hero section height (first section)
      const heroSection = document.querySelector('section:first-of-type');
      if (!heroSection) return;
      
      const heroHeight = heroSection.offsetHeight;
      const scrollPosition = window.scrollY;
      
      // If scroll position is within hero section height, show the mouse trail
      setIsInHeroSection(scrollPosition < heroHeight);
    };
    
    // Initial check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  if (!isClient || !isInHeroSection) {
    return null;
  }
  
  return <MouseTrail />;
}
