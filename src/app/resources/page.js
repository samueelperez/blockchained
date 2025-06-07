"use client";

import { useState, Suspense } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import MouseTrailWrapper from '../components/MouseTrailWrapper';

// Dynamically import the TypewriterEffect component with no SSR
const TypewriterEffect = dynamic(() => import('../components/TypewriterEffect'), {
  ssr: false,
  loading: () => <span>TRADING</span>
});

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState('all');
  
  const scrollToSection = (section) => {
    setActiveTab(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 snap-y snap-mandatory h-screen overflow-y-scroll">
      <MouseTrailWrapper />
      
      {/* Hero Section */}
      <section className="h-screen pt-32 pb-16 relative overflow-hidden snap-start flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-600/30 to-black/80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(236,72,153,0.3),transparent_40%)]"></div>
          <div className="absolute inset-0 opacity-10" 
               style={{ 
                 backgroundImage: 'linear-gradient(#ec4899 1px, transparent 1px), linear-gradient(to right, #8b5cf6 1px, transparent 1px)', 
                 backgroundSize: '40px 40px' 
               }}>
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
                LEARN <TypewriterEffect words={["TRADING", "ORDERBOOK", "GANN-ASTRO"]} typingSpeed={100} deletingSpeed={80} pauseTime={1500} />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10">
              Comprehensive trading education for all skill levels - from fundamentals to advanced strategies
            </p>
            
            {/* Navigation Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-6 py-3 rounded-full transition-all ${
                  activeTab === 'all' 
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/20' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                All Resources
              </button>
              <button 
                onClick={() => scrollToSection('beginner')}
                className={`px-6 py-3 rounded-full transition-all ${
                  activeTab === 'beginner' 
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/20' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                Beginner
              </button>
              <button 
                onClick={() => scrollToSection('intermediate')}
                className={`px-6 py-3 rounded-full transition-all ${
                  activeTab === 'intermediate' 
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/20' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                Intermediate
              </button>
              <button 
                onClick={() => scrollToSection('expert')}
                className={`px-6 py-3 rounded-full transition-all ${
                  activeTab === 'expert' 
                    ? 'bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-lg shadow-indigo-500/20' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                Expert
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Resource Categories */}
      <section className="h-screen py-20 bg-gray-900/50 snap-start flex flex-col justify-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Resource Categories</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Videos */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-xl border border-gray-800 overflow-hidden group hover:shadow-pink-500/10 hover:border-pink-500/20 transition-all duration-300">
              <div className="p-1 bg-gradient-to-r from-pink-500 to-purple-600"></div>
              <div className="p-6">
                <div className="flex items-center justify-center h-48 mb-4 bg-gray-800/50 rounded-lg">
                  <svg className="w-16 h-16 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-pink-400 transition-colors">Video Tutorials</h3>
                <p className="text-gray-300 mb-6">
                  Watch step-by-step video tutorials covering all aspects of trading, from basics to advanced techniques.
                </p>
                <Link href="/resources/videos" className="inline-block w-full py-3 px-4 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-md transition-colors text-center">
                  Browse Videos
                </Link>
              </div>
            </div>
            
            {/* Guides */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-xl border border-gray-800 overflow-hidden group hover:shadow-purple-500/10 hover:border-purple-500/20 transition-all duration-300">
              <div className="p-1 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
              <div className="p-6">
                <div className="flex items-center justify-center h-48 mb-4 bg-gray-800/50 rounded-lg">
                  <svg className="w-16 h-16 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">Trading Guides</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive guides and e-books on trading strategies, technical analysis, and risk management.
                </p>
                <Link href="/resources/guides" className="inline-block w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors text-center">
                  Download Guides
                </Link>
              </div>
            </div>
            
            {/* Tools */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-xl border border-gray-800 overflow-hidden group hover:shadow-indigo-500/10 hover:border-indigo-500/20 transition-all duration-300">
              <div className="p-1 bg-gradient-to-r from-indigo-600 to-cyan-600"></div>
              <div className="p-6">
                <div className="flex items-center justify-center h-48 mb-4 bg-gray-800/50 rounded-lg">
                  <svg className="w-16 h-16 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">Trading Tools</h3>
                <p className="text-gray-300 mb-6">
                  Interactive tools, calculators, and templates to enhance your trading analysis and decision-making.
                </p>
                <Link href="/resources/tools" className="inline-block w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors text-center">
                  Access Tools
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Learning Sections */}
      <section id="beginner" className="h-screen py-20 relative snap-start flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-pink-600/20 to-black/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-pink-900/30 text-pink-400 text-sm font-medium mb-4">LEVEL 1</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Beginner <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Trading</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Start your trading journey with fundamental concepts, basic chart analysis, and risk management principles.
              </p>
            </div>
            
            {/* Learning Modules */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Module 1 */}
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-xl border border-gray-800 overflow-hidden group hover:shadow-pink-500/10 hover:border-pink-500/20 transition-all duration-300">
                <div className="p-1 bg-gradient-to-r from-pink-500 to-purple-600"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-pink-400 transition-colors">Trading Fundamentals</h3>
                  <p className="text-gray-300 mb-6">
                    Learn the essential concepts and terminology that form the foundation of trading.
                  </p>
                  <Link href="/resources/beginner/fundamentals" className="inline-block w-full py-3 px-4 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-md transition-colors text-center">
                    Start Module
                  </Link>
                </div>
              </div>
              
              {/* Module 2 */}
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-xl border border-gray-800 overflow-hidden group hover:shadow-pink-500/10 hover:border-pink-500/20 transition-all duration-300">
                <div className="p-1 bg-gradient-to-r from-pink-500 to-purple-600"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-pink-400 transition-colors">Basic Chart Analysis</h3>
                  <p className="text-gray-300 mb-6">
                    Discover how to read and interpret price charts to make informed trading decisions.
                  </p>
                  <Link href="/resources/beginner/chart-analysis" className="inline-block w-full py-3 px-4 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-md transition-colors text-center">
                    Start Module
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="intermediate" className="h-screen py-20 relative snap-start flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-600/20 to-black/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-purple-900/30 text-purple-400 text-sm font-medium mb-4">LEVEL 2</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Intermediate <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Trading</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advance your skills with technical analysis, trading strategies, and market psychology.
              </p>
            </div>
            
            {/* Learning Modules */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Module 1 */}
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-xl border border-gray-800 overflow-hidden group hover:shadow-purple-500/10 hover:border-purple-500/20 transition-all duration-300">
                <div className="p-1 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">Advanced Technical Analysis</h3>
                  <p className="text-gray-300 mb-6">
                    Master advanced chart patterns and technical indicators to improve your market analysis.
                  </p>
                  <Link href="/resources/intermediate/technical-analysis" className="inline-block w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors text-center">
                    Start Module
                  </Link>
                </div>
              </div>
              
              {/* Module 2 */}
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-xl border border-gray-800 overflow-hidden group hover:shadow-purple-500/10 hover:border-purple-500/20 transition-all duration-300">
                <div className="p-1 bg-gradient-to-r from-purple-600 to-indigo-600"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">Trading Strategies</h3>
                  <p className="text-gray-300 mb-6">
                    Learn proven trading strategies and how to adapt them to different market conditions.
                  </p>
                  <Link href="/resources/intermediate/strategies" className="inline-block w-full py-3 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors text-center">
                    Start Module
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="expert" className="h-screen py-20 relative snap-start flex flex-col justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/20 to-black/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-indigo-900/30 text-indigo-400 text-sm font-medium mb-4">LEVEL 3</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-500">Trading</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Master advanced trading techniques, algorithmic strategies, and portfolio optimization.
              </p>
            </div>
            
            {/* Learning Modules */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Module 1 */}
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-xl border border-gray-800 overflow-hidden group hover:shadow-indigo-500/10 hover:border-indigo-500/20 transition-all duration-300">
                <div className="p-1 bg-gradient-to-r from-indigo-600 to-cyan-600"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">Advanced Market Analysis</h3>
                  <p className="text-gray-300 mb-6">
                    Master sophisticated market analysis techniques used by professional traders.
                  </p>
                  <Link href="/resources/expert/market-analysis" className="inline-block w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors text-center">
                    Start Module
                  </Link>
                </div>
              </div>
              
              {/* Module 2 */}
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-xl border border-gray-800 overflow-hidden group hover:shadow-indigo-500/10 hover:border-indigo-500/20 transition-all duration-300">
                <div className="p-1 bg-gradient-to-r from-indigo-600 to-cyan-600"></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-indigo-400 transition-colors">Algorithmic Trading</h3>
                  <p className="text-gray-300 mb-6">
                    Learn to develop, test, and implement algorithmic trading strategies.
                  </p>
                  <Link href="/resources/expert/algorithmic-trading" className="inline-block w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors text-center">
                    Start Module
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Mentorship Program */}
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-xl border border-gray-800 overflow-hidden p-8 mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center">Professional Mentorship Program</h2>
              <p className="text-xl text-gray-300 mb-8 text-center">
                Take your trading to the highest level with personalized guidance from professional traders.
              </p>
              
              <div className="text-center">
                <Link 
                  href="/resources/expert/mentorship" 
                  className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white font-medium rounded-full inline-block transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20"
                >
                  Apply for Mentorship
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
