import { supabase } from '../lib/supabase';

export async function fetchPerformancesByDate() {
  const { data, error } = await supabase
    .from('performance_history')
    .select(`
      date_played,
      hymns (
        id,
        hymn_number,
        title
      )
    `)
    .order('date_played', { ascending: false });

  if (error) {
    console.error('Error fetching performance history:', error.message);
    return [];
  }

  // Group rows by date_played
  const groupedByDate = {};
  data.forEach(record => {
    const date = record.date_played;
    if (!groupedByDate[date]) {
      groupedByDate[date] = [];
    }
    groupedByDate[date].push(record.hymns);
  });

  // Transform into an array format suitable for a FlatList
  return Object.keys(groupedByDate).map(date => ({
    date_played: date,
    hymns: groupedByDate[date]
  }));
}