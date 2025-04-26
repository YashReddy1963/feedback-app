import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zbgspvgbnlyicrhtgpjv.supabase.co'; 
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpiZ3Nwdmdibmx5aWNyaHRncGp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2NTk4MTEsImV4cCI6MjA2MTIzNTgxMX0.iQtSzTpU9pYrePx5pzBl55G4cuVXjLQjPlUuIQeNT6w';
const supabase = createClient(supabaseUrl, supabaseKey);

export async function handler() {
  const { data, error } = await supabase
    .from('feedbacks')
    .select('*');

  if (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}
