"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import LoginForm from '../components/LoginForm';

export default function LoginPage() {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  // Redirect if already logged in
  useEffect(() => {
    if (user && !isLoading) {
      router.push('/');
    }
  }, [user, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
        
        {/* Subtle blue glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.08),transparent_70%)]"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10" 
             style={{ 
               backgroundImage: 'linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(to right, #2563eb 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>
      </div>
      
      <div className="relative z-10 w-full max-w-md px-4">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-white mb-2">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">BLOCKCHAINED SNIPERS</span>
          </h1>
          <p className="text-gray-400 text-sm">
            Sign in to access premium trading resources and personalized features
          </p>
        </div>
        
        <LoginForm />
        
        <div className="mt-8 text-center text-xs text-gray-500">
          <p>By signing in, you agree to our Terms of Service and Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}
