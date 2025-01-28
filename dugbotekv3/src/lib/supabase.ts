import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type SignupRequest = {
  business_name: string;
  business_description: string;
  product_description: string;
  website_url: string;
  linkedin_profile?: string;
  contact_preference: string;
  first_name: string;
  last_name: string;
  position: string;
  phone?: string;
  email: string;
}; 