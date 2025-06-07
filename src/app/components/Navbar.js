"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { user, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return pathname === path;
  };

  const handleSignOut = async () => {
    await signOut();
    router.push('/');
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold gradient-text">BLOCKCHAINED SNIPERS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`nav-link ${isActive('/') ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
            >
              Home
            </Link>
            <Link 
              href="/resources" 
              className={`nav-link ${isActive('/resources') ? 'text-pink-400' : 'text-gray-300 hover:text-white'}`}
            >
              Resources
            </Link>
            {user ? (
              <>
                <Link 
                  href="/dashboard" 
                  className={`nav-link ${isActive('/dashboard') ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
                >
                  Dashboard
                </Link>
                <button 
                  onClick={handleSignOut}
                  className="btn btn-sm btn-outline"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link 
                href="/login" 
                className="btn btn-sm btn-outline"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link 
              href="/" 
              className={`block py-2 ${isActive('/') ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/resources" 
              className="block py-2 px-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            {user ? (
              <>
                <Link 
                  href="/dashboard" 
                  className={`block py-2 ${isActive('/dashboard') ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <button 
                  onClick={handleSignOut}
                  className="block w-full text-left py-2 px-4 mt-2 border border-gray-600 text-gray-300 hover:text-white rounded-md transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link 
                href="/login" 
                className="block py-2 px-4 mt-2 border border-gray-600 text-gray-300 hover:text-white rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
