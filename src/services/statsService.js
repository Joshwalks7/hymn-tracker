import { supabase } from '../lib/supabase';

export async function fetchHymnStats() {
    const { data, error } = await supabase
        .from('performance_history')
        .select(`
            hymn_id,
            date_played,
            hymns (
                id,
                hymn_number,
                title
            )
        `);

    if (error) {
        console.error('Error fetching stats:', error.message);
        throw error;
    }

    const statsMap = {};

    (data ?? []).forEach(record => {
        if (!record.hymns) return;
        const hymnId = record.hymn_id;

        if (!statsMap[hymnId]) {
            statsMap[hymnId] = {
                ...record.hymns,
                playCount: 0,
                dates: []
            };
        }

        statsMap[hymnId].playCount += 1;
        statsMap[hymnId].dates.push(new Date(record.date_played));
    });

    const statsArray = Object.values(statsMap).map(hymn => {
        hymn.dates.sort((a, b) => b - a);
        return {
            ...hymn,
            lastPlayed: hymn.dates[0] ? hymn.dates[0].toISOString().split('T')[0] : 'Never'
        };
    });

    statsArray.sort((a, b) => b.playCount - a.playCount);
    return statsArray;
}