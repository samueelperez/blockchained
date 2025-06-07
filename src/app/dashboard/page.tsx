"use client";

import ProtectedRoute from '../components/ProtectedRoute';
import MouseTrailWrapper from '../components/MouseTrailWrapper';
import { useAuth } from '@/lib/auth';

export default function DashboardPage() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-elegant">
        <MouseTrailWrapper />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/80"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.2),transparent_40%)]"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Your <span className="gradient-text">Dashboard</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Welcome back, {user?.email}
              </p>
            </div>
          </div>
        </section>
        
        {/* Dashboard Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Recent Activity */}
              <div className="crypto-card hover:translate-y-[-5px]">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    <div className="border-b border-gray-700 pb-4">
                      <p className="text-gray-300">You completed the Technical Analysis course</p>
                      <p className="text-sm text-gray-500">2 days ago</p>
                    </div>
                    <div className="border-b border-gray-700 pb-4">
                      <p className="text-gray-300">You saved the Risk Management Guide</p>
                      <p className="text-sm text-gray-500">5 days ago</p>
                    </div>
                    <div>
                      <p className="text-gray-300">You joined TradingEdu</p>
                      <p className="text-sm text-gray-500">1 week ago</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Saved Resources */}
              <div className="crypto-card hover:translate-y-[-5px]">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Saved Resources</h3>
                  <div className="space-y-4">
                    <div className="border-b border-gray-700 pb-4">
                      <p className="text-gray-300">Ultimate Risk Management Guide</p>
                      <p className="text-sm text-gray-500">Guide</p>
                    </div>
                    <div className="border-b border-gray-700 pb-4">
                      <p className="text-gray-300">Position Size Calculator</p>
                      <p className="text-sm text-gray-500">Tool</p>
                    </div>
                    <div>
                      <p className="text-gray-300">Trading Journal Template</p>
                      <p className="text-sm text-gray-500">Tool</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Progress */}
              <div className="crypto-card hover:translate-y-[-5px]">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Your Progress</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">Technical Analysis Course</span>
                        <span className="text-blue-400">75%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">Risk Management</span>
                        <span className="text-blue-400">100%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">Trading Psychology</span>
                        <span className="text-blue-400">30%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Recommended Resources */}
        <section className="py-20 bg-gray-900/50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Recommended For You</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Resource 1 */}
              <div className="card hover:translate-y-[-5px]">
                <div className="p-6">
                  <div className="flex items-center justify-center h-48 mb-4 bg-gray-800 rounded-lg">
                    <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Advanced Trading Psychology</h3>
                  <p className="text-gray-300 mb-4">Master the mental aspects of trading with this comprehensive course.</p>
                </div>
              </div>
              
              {/* Resource 2 */}
              <div className="card hover:translate-y-[-5px]">
                <div className="p-6">
                  <div className="flex items-center justify-center h-48 mb-4 bg-gray-800 rounded-lg">
                    <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Market Analysis Tools</h3>
                  <p className="text-gray-300 mb-4">Essential tools for analyzing market trends and making informed decisions.</p>
                </div>
              </div>
              
              {/* Resource 3 */}
              <div className="card hover:translate-y-[-5px]">
                <div className="p-6">
                  <div className="flex items-center justify-center h-48 mb-4 bg-gray-800 rounded-lg">
                    <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Advanced Strategy Guide</h3>
                  <p className="text-gray-300 mb-4">Take your trading to the next level with these advanced strategies.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </ProtectedRoute>
  );
}
