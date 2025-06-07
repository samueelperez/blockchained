import { AnalysisRequest, CryptoAnalysis } from '../types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

export async function generateAnalysis(request: AnalysisRequest): Promise<CryptoAnalysis> {
  const response = await fetch(`${API_URL}/generate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.detail?.error || 'Failed to generate analysis');
  }

  return response.json();
}

export async function getHealth(): Promise<{ status: string }> {
  const response = await fetch(`${API_URL}/health`);
  
  if (!response.ok) {
    throw new Error('API health check failed');
  }
  
  return response.json();
}

export async function getAvailableSymbols(): Promise<string[]> {
  // This would be implemented when the backend provides this endpoint
  // For now, return a static list of popular cryptocurrencies
  return ['BTC', 'ETH', 'SOL', 'DOGE', 'SHIB', 'XRP', 'ADA', 'AVAX', 'DOT', 'MATIC'];
}

export async function getAvailableTimeframes(): Promise<string[]> {
  // This would be implemented when the backend provides this endpoint
  // For now, return a static list of common timeframes
  return ['1m', '5m', '15m', '30m', '1h', '4h', '1d', '1w'];
}
