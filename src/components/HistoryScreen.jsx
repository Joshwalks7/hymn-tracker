import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { fetchPerformancesByDate } from '../services/historyService';

export default function HistoryScreen() {
    const [history, setHistory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadHistory() {
            const data = await fetchPerformancesByDate();
            setHistory(data);
            setLoading(false);
        }
        loadHistory();
    }, []);

    if (loading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#007AFF" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Performance History</Text>
            
            {history.length === 0 ? (
                <Text style={styles.emptyText}>No agendas recorded yet.</Text>
            ) : (
                <FlatList
                    data={history}
                    keyExtractor={(item) => item.date_played}
                    renderItem={({ item }) => (
                        <View style={styles.card}>
                            <Text style={styles.dateText}>{item.date_played}</Text>
                            {item.hymns.map((hymn, idx) => (
                                <Text key={idx} style={styles.hymnText}>
                                    • {hymn.hymn_number} - {hymn.title}
                                </Text>
                            ))}
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
    header: { fontSize: 20, fontWeight: 'bold', marginBottom: 15, color: '#333' },
    emptyText: { color: '#666', fontStyle: 'italic', marginTop: 10 },
    card: { backgroundColor: '#f9f9f9', padding: 15, borderRadius: 8, marginBottom: 12, borderWidth: 1, borderColor: '#eee' },
    dateText: { fontWeight: 'bold', fontSize: 16, color: '#007AFF', marginBottom: 8 },
    hymnText: { fontSize: 14, color: '#444', marginBottom: 4 }
});