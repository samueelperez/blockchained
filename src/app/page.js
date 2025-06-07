"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import MouseTrailWrapper from './components/MouseTrailWrapper';
import PageLayout from './page-layout';

export default function HomePage() {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCryptoData = async () => {
    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,cardano,polkadot&order=market_cap_desc&per_page=5&page=1&sparkline=false&price_change_percentage=24h'
      );
      
      if (!response.ok) {
        throw new Error('Error al obtener datos de criptomonedas');
      }

      const data = await response.json();
      setCryptoData(data.map(coin => ({
        name: coin.name,
        symbol: coin.symbol.toUpperCase(),
        price: coin.current_price,
        change24h: coin.price_change_percentage_24h
      })));
      setError(null);
    } catch (err) {
      setError('Error al cargar los datos de criptomonedas');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 30000); // Actualizar cada 30 segundos
    
    return () => clearInterval(interval);
  }, []);

  return (
    <PageLayout>
      <div className="min-h-screen bg-elegant">
      <MouseTrailWrapper />
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2),transparent_40%)]"></div>
        </div>
        
        <div className="container mx-auto relative z-10 pt-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              BLOCKCHAINED <span className="gradient-text">SNIPERS</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8">
              Enhance your trading skills with comprehensive educational resources, expert strategies, and market analysis tools.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/resources" 
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-full transform transition-all hover:scale-105 hover:shadow-lg hover:shadow-pink-500/20 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white"
              >
                Trading Resources
              </Link>
            </div>
          </div>
        </div>
        {/* Crypto Ticker dentro del hero, pegado abajo */}
        <div className="relative z-10">
          <div className="py-6 bg-gray-900/50">
            <div className="container mx-auto">
              <div className="flex overflow-x-auto scrollbar-hide">
                {loading ? (
                  <div className="flex items-center justify-center w-full">
                    <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
                  </div>
                ) : error ? (
                  <div className="text-red-500 text-center w-full">{error}</div>
                ) : (
                  <div className="flex animate-marquee whitespace-nowrap">
                    {[...cryptoData, ...cryptoData].map((crypto, index) => (
                      <div key={index} className="flex items-center mx-6">
                        <span className="font-bold mr-2">{crypto.symbol}</span>
                        <span className="mr-2">${crypto.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                        <span className={`${crypto.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                          {crypto.change24h >= 0 ? '+' : ''}{crypto.change24h.toFixed(2)}%
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      <section className="py-12 md:py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Learning Paths</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {/* Beginner Path */}
            <div className="crypto-card hover:translate-y-[-5px]">
              <h3 className="text-2xl font-bold mb-4">Beginner</h3>
              <p className="text-gray-300 mb-6">
                Start your trading journey with fundamental concepts, basic chart analysis, and risk management principles.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Trading Fundamentals
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Basic Chart Analysis
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Risk Management
                </li>
              </ul>
              <Link href="/resources#beginner" className="w-full py-3 px-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium rounded-md transition-colors text-center inline-block">
                Start Here
              </Link>
            </div>
            
            {/* Intermediate Path */}
            <div className="crypto-card hover:translate-y-[-5px]">
              <h3 className="text-2xl font-bold mb-4">Intermediate</h3>
              <p className="text-gray-300 mb-6">
                Advance your skills with technical analysis, trading strategies, and market psychology.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Technical Analysis
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Trading Strategies
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Market Psychology
                </li>
              </ul>
              <Link href="/resources#intermediate" className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium rounded-md transition-colors text-center inline-block">
                Continue Learning
              </Link>
            </div>
            
            {/* Expert Path */}
            <div className="crypto-card hover:translate-y-[-5px]">
              <h3 className="text-2xl font-bold mb-4">Expert</h3>
              <p className="text-gray-300 mb-6">
                Master advanced trading techniques, algorithmic strategies, and portfolio optimization.
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Advanced Strategies
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Algorithmic Trading
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Portfolio Optimization
                </li>
              </ul>
              <Link href="/resources#expert" className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white font-medium rounded-md transition-colors text-center inline-block">
                Become an Expert
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Latest Resources Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">Latest Resources</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Resource Card 1 */}
            <div className="card hover:translate-y-[-5px]">
              <div className="p-6">
                <div className="flex items-center justify-center h-48 mb-4 bg-gray-800 rounded-lg">
                  <svg className="w-16 h-16 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Introduction to Technical Analysis</h3>
                <p className="text-gray-300 mb-4">Learn the basics of chart patterns, indicators, and how to apply them in your trading decisions.</p>
                <Link href="/resources#beginner" className="text-pink-400 hover:text-pink-300 inline-flex items-center">
                  Watch Video
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Resource Card 2 */}
            <div className="card hover:translate-y-[-5px]">
              <div className="p-6">
                <div className="flex items-center justify-center h-48 mb-4 bg-gray-800 rounded-lg">
                  <svg className="w-16 h-16 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Risk Management Guide</h3>
                <p className="text-gray-300 mb-4">Essential strategies to protect your capital and maximize your trading performance.</p>
                <Link href="/resources#beginner" className="text-purple-400 hover:text-purple-300 inline-flex items-center">
                  Read Guide
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Resource Card 3 */}
            <div className="card hover:translate-y-[-5px]">
              <div className="p-6">
                <div className="flex items-center justify-center h-48 mb-4 bg-gray-800 rounded-lg">
                  <svg className="w-16 h-16 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Trading Strategy Templates</h3>
                <p className="text-gray-300 mb-4">Download ready-to-use trading strategy templates to jumpstart your trading journey.</p>
                <Link href="/resources#expert" className="text-indigo-400 hover:text-indigo-300 inline-flex items-center">
                  Download Templates
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </PageLayout>
  );
}
