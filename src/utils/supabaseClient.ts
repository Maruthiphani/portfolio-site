import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client
// In a production environment, these values should be stored in environment variables
const supabaseUrl = 'https://your-supabase-url.supabase.co';
const supabaseAnonKey = 'your-supabase-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);