"use client";

import { useEffect, useRef, useState } from 'react';
import MouseTrail from './MouseTrail';

export default function MouseTrailHero() {
  const [isClient, setIsClient] = useState(false);
  const [showMouseTrail, setShowMouseTrail] = useState(true);
  const containerRef = useRef(null);
  const mouseTrailMountedRef = useRef(true);
  
  useEffect(() => {
    setIsClient(true);
    
    // Function to check if we're in the hero section
    const handleScroll = () => {
      // Get the hero section (first section)
      const heroSection = document.querySelector('section:first-of-type');
      if (!heroSection) return;
      
      const heroRect = heroSection.getBoundingClientRect();
      const scrollY = window.scrollY;
      
      // Only show mouse trail if we're still in the hero section
      // We consider being in the hero section if:
      // 1. The hero section is still visible (at least partially)
      // 2. We haven't scrolled past the hero section height
      const shouldShowTrail = 
        heroRect.bottom > 0 && // Hero section is still visible
        scrollY < heroRect.height; // Haven't scrolled past hero height
      
      // Update state only if it changed to avoid unnecessary re-renders
      if (shouldShowTrail !== mouseTrailMountedRef.current) {
        setShowMouseTrail(shouldShowTrail);
        mouseTrailMountedRef.current = shouldShowTrail;
        
        // Force immediate style update for smoother transition
        if (containerRef.current) {
          containerRef.current.style.opacity = shouldShowTrail ? '1' : '0';
          
          // If hiding, also set pointer-events to none
          if (!shouldShowTrail) {
            containerRef.current.style.pointerEvents = 'none';
          }
        }
      }
    };
    
    // Initial check with a small delay to ensure DOM is ready
    const initialCheckTimer = setTimeout(handleScroll, 100);
    
    // Add scroll event listener with throttling for performance
    let lastScrollTime = 0;
    const scrollThrottleMs = 50; // Throttle to 50ms
    
    const throttledScrollHandler = () => {
      const now = Date.now();
      if (now - lastScrollTime > scrollThrottleMs) {
        lastScrollTime = now;
        handleScroll();
      }
    };
    
    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    
    // Cleanup
    return () => {
      clearTimeout(initialCheckTimer);
      window.removeEventListener('scroll', throttledScrollHandler);
    };
  }, []);
  
  if (!isClient) {
    return null;
  }
  
  return (
    <div 
      ref={containerRef} 
      className="transition-opacity duration-300" 
      style={{ 
        opacity: showMouseTrail ? 1 : 0,
        pointerEvents: 'none',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 50
      }}
    >
      {showMouseTrail && <MouseTrail />}
    </div>
  );
}
