import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Please check your .env.local file.');
}

export const supabase = createClient(
  supabaseUrl || 'https://ldfocyvxzbmgbfxwugrb.supabase.co',
  supabaseAnonKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxkZm9jeXZ4emJtZ2JmeHd1Z3JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkyNjA3MjgsImV4cCI6MjA2NDgzNjcyOH0.BwSGAcDys_pPoSUDPKmn4pmsqcas0FxLb2xPNA7A8u0'
);
