import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { fetchHymnStats } from '../services/statsService';

export default function StatsScreen() {
    const [stats, setStats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadStats() {
            try {
                const data = await fetchHymnStats();
                console.log('Fetched Stats Data:', data);
                setStats(data);
            } catch (loadError) {
                console.error('Unable to load hymn stats:', loadError);
                setError('Unable to load hymn statistics.');
            } finally {
                setLoading(false);
            }
        }
        loadStats();
    }, []);

    if (loading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#007AFF" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.centered}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Hymn Statistics</Text>
            
            {/* Temporary debug text to verify array length on screen */}
            <Text style={{ marginBottom: 10, color: '#888' }}>
                Items found: {stats.length}
            </Text>

            {stats.length === 0 ? (
                <Text style={styles.emptyText}>No performance history recorded yet.</Text>
            ) : (
                <FlatList
                    data={stats}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item, index }) => (
                        <View style={styles.row}>
                            <View style={styles.rankContainer}>
                                <Text style={styles.rank}>#{index + 1}</Text>
                            </View>
                            <View style={styles.infoContainer}>
                                <Text style={styles.title}>{item.hymn_number} - {item.title}</Text>
                                <Text style={styles.details}>Last played: {item.lastPlayed}</Text>
                            </View>
                            <View style={styles.countContainer}>
                                <Text style={styles.countNumber}>{item.playCount}</Text>
                                <Text style={styles.countLabel}>plays</Text>
                            </View>
                        </View>
                    )}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', padding: 15 },
    centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    header: { fontSize: 20, fontWeight: 'bold', marginBottom: 5, color: '#333' },
    emptyText: { color: '#666', fontStyle: 'italic', marginTop: 10 },
    errorText: { color: '#b00020', textAlign: 'center' },
    row: { flexDirection: 'row', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#eee', alignItems: 'center' },
    rankContainer: { width: 40, justifyContent: 'center' },
    rank: { fontWeight: 'bold', color: '#888', fontSize: 16 },
    infoContainer: { flex: 1, paddingHorizontal: 10 },
    title: { fontSize: 16, fontWeight: '600', color: '#222' },
    details: { fontSize: 12, color: '#666', marginTop: 4 },
    countContainer: { alignItems: 'center', backgroundColor: '#f0f4ff', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 6 },
    countNumber: { fontWeight: 'bold', color: '#007AFF', fontSize: 16 },
    countLabel: { fontSize: 10, color: '#007AFF' }
});