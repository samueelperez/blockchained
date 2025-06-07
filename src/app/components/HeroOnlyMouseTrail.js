"use client";

import { useEffect, useState } from 'react';
import MouseTrail from './MouseTrail';

export default function HeroOnlyMouseTrail() {
  const [isClient, setIsClient] = useState(false);
  const [isInHeroSection, setIsInHeroSection] = useState(true);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    
    // Check if we're on a mobile device
    const checkIfMobile = () => {
      // Consider devices with width less than 768px as mobile
      return window.innerWidth < 768;
    };
    
    // Set initial mobile state
    setIsMobileDevice(checkIfMobile());
    
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
    
    // Add resize event listener to update mobile state
    const handleResize = () => {
      setIsMobileDevice(checkIfMobile());
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Only render the MouseTrail component when:
  // 1. We're on the client-side
  // 2. We're in the hero section
  // 3. We're on a mobile device (screen width < 768px)
  if (!isClient || !isInHeroSection || !isMobileDevice) {
    return null;
  }
  
  return <MouseTrail />;
}
