import { supabase } from '../lib/supabase';

export async function recordPerformance({ openingHymnId, sacramentHymnId, closingHymnId, datePlayed }) {
    const records = [
        { hymn_id: openingHymnId, date_played: datePlayed },
        { hymn_id: sacramentHymnId, date_played: datePlayed },
        { hymn_id: closingHymnId, date_played: datePlayed },
    ].filter(record => record.hymn_id);

    const { data, error } = await supabase
        .from('performance_history')
        .insert(records);

    if (error) {
        console.error('Error recording performance:', error.message);
        throw error;
    }

    return true;
}