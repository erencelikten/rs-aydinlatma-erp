// Supabase Configuration
const SUPABASE_URL = 'https://rgqjkuuuukvhzwfuyxfcb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJncWprdXV1a3ZoendmdXl4ZmNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk4MzExNTEsImV4cCI6MjA4NTQwNzE1MX0.DS5c2qF_Mt2f-JF6FgzBfMwQJOIXfjx1QdQ1Z_GCVdE';

// Initialize the Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Export for use in other files
window.supabaseClient = supabase;
