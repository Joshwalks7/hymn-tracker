import { supabase } from '../lib/supabase';

export async function fetchHymns() {
  const {data, error} = await supabase.from('hymns').select('*').order('hymn_number', {ascending: true});
  if (error) {
    console.error('Error fetching hymns:', error.message);
    return [];
  }
  return data;
}