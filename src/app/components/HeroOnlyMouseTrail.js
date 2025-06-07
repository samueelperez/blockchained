"use client";

import { useEffect, useRef, useState } from 'react';
import MouseTrail from './MouseTrail';

export default function HeroOnlyMouseTrail() {
  const [isClient, setIsClient] = useState(false);
  const [isInHeroSection, setIsInHeroSection] = useState(true);
  
  useEffect(() => {
    setIsClient(true);
    
    // Function to check if we're in the hero section
    const checkHeroSection = () => {
      const heroSection = document.querySelector('section:first-of-type');
      if (!heroSection) return true; // Default to true if we can't find the section
      
      const heroRect = heroSection.getBoundingClientRect();
      const scrollY = window.scrollY;
      
      // We're in the hero section if:
      // 1. We haven't scrolled past the hero section height
      return scrollY < heroRect.height * 0.8; // Use 80% of height as threshold
    };
    
    // Initial check
    setIsInHeroSection(checkHeroSection());
    
    // Add scroll event listener
    const handleScroll = () => {
      setIsInHeroSection(checkHeroSection());
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Only render the MouseTrail component when in the hero section
  // This ensures it's completely unmounted when not needed
  if (!isClient || !isInHeroSection) {
    return null;
  }
  
  return <MouseTrail />;
}
