import { createClient } from '@supabase/supabase-js';

// Grab your hidden keys using Vite's environment manager
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

//  Fire up the connection engine
export const supabase = createClient(supabaseUrl, supabaseAnonKey);