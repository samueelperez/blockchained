"use client";

import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function NavbarWrapper() {
  const pathname = usePathname();
  
  if (pathname === '/') {
    return null;
  }
  
  // For resources page, we don't need padding-top since we're using 100vh sections
  if (pathname === '/resources') {
    return (
      <>
        <Navbar />
        <style jsx global>{`
          main {
            padding-top: 0;
          }
        `}</style>
      </>
    );
  }
  
  return (
    <>
      <Navbar />
      <style jsx global>{`
        main {
          padding-top: 4rem;
        }
      `}</style>
    </>
  );
}
