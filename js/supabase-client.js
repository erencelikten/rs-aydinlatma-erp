// Supabase Configuration
// Replace with your actual project URL and Anon Key from the Supabase Dashboard
const SUPABASE_URL = window.SUPABASE_URL || 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';

// Initialize the Supabase client
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Export for use in other files
window.supabaseClient = supabase;
