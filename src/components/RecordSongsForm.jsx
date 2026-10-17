import React, { useState, useEffect } from 'react';
import { Text, TextInput, Pressable, View, FlatList, StyleSheet, Alert } from 'react-native';
import { fetchHymns } from '../services/hymnService';
import { recordPerformance } from '../services/recordPerformance'; // or wherever you put it

export default function RecordSongsForm() {
    const [hymns, setHymns] = useState([]);
    const [openingHymn, setOpeningHymn] = useState(null);
    const [sacramentHymn, setSacramentHymn] = useState(null);
    const [closingHymn, setClosingHymn] = useState(null);
    
    // Default to today's date in YYYY-MM-DD format
    const [datePlayed, setDatePlayed] = useState(new Date().toISOString().split('T')[0]);

    useEffect(() => {
        async function loadData() {
            const data = await fetchHymns();
            setHymns(data);
        }
        loadData();
    }, []);

    const handleSubmit = async () => {
        if (!openingHymn && !sacramentHymn && !closingHymn) {
            Alert.alert('Error', 'Please select at least one hymn.');
            return;
        }

        try {
            await recordPerformance({
                openingHymnId: openingHymn ? openingHymn.id : null,
                sacramentHymnId: sacramentHymn ? sacramentHymn.id : null,
                closingHymnId: closingHymn ? closingHymn.id : null,
                datePlayed: datePlayed,
            });
            Alert.alert('Success', 'Sacrament agenda recorded successfully!');
            // Reset form
            setOpeningHymn(null);
            setSacramentHymn(null);
            setClosingHymn(null);
        } catch (error) {
            const message = error instanceof Error ? error.message : 'Unknown database error';
            Alert.alert('Error', `Failed to save agenda: ${message}`);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Record Sacrament Agenda</Text>

            {/* Date Selection */}
            <View style={styles.inputContainer}>
                <Text style={styles.label}>Date Played (YYYY-MM-DD):</Text>
                <TextInput 
                    style={styles.input}
                    value={datePlayed}
                    onChangeText={setDatePlayed}
                    placeholder="YYYY-MM-DD"
                />
            </View>

            <SongSearchInput 
                label="Opening Hymn" 
                selectedSong={openingHymn} 
                onSelectSong={setOpeningHymn} 
                hymns={hymns}
            />
            <SongSearchInput 
                label="Sacrament Hymn" 
                selectedSong={sacramentHymn} 
                onSelectSong={setSacramentHymn} 
                hymns={hymns}
            />
            <SongSearchInput 
                label="Closing Hymn" 
                selectedSong={closingHymn} 
                onSelectSong={setClosingHymn} 
                hymns={hymns}
            />
            
            <Pressable onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Record Agenda</Text>
            </Pressable>
        </View>
    );
}

function SongSearchInput({ label, selectedSong, onSelectSong, hymns }) {
    const [query, setQuery] = useState(selectedSong ? `${selectedSong.hymn_number} - ${selectedSong.title}` : '');
    const [isOpen, setIsOpen] = useState(false);

    const filteredHymns = hymns.filter(hymn => 
        hymn.title.toLowerCase().includes(query.toLowerCase()) || 
        String(hymn.hymn_number).includes(query)
    );

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}:</Text>
            <TextInput 
                style={styles.input}
                placeholder="Search by number or title"
                placeholderTextColor="#888"
                value={query}
                onChangeText={(text) => {
                    setQuery(text);
                    setIsOpen(true);
                    if (text === '') onSelectSong(null);
                }}
                onFocus={() => setIsOpen(true)}
            />

            {isOpen && filteredHymns.length > 0 && (
                <View style={styles.dropdown}>
                    <FlatList
                        data={filteredHymns}
                        keyExtractor={(item) => item.id.toString()}
                        keyboardShouldPersistTaps="handled"
                        renderItem={({ item }) => (
                            <Pressable
                                onPress={() => {
                                    onSelectSong(item);
                                    setQuery(`${item.hymn_number} - ${item.title}`);
                                    setIsOpen(false);
                                }}
                                style={styles.dropdownItem}
                            >
                                <Text>{item.hymn_number} - {item.title}</Text>
                            </Pressable>
                        )}
                    />
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, backgroundColor: '#fff', flex: 1 },
    header: { fontSize: 18, fontWeight: 'bold', marginBottom: 20, color: '#333' },
    inputContainer: { marginBottom: 15, zIndex: 2 },
    label: { marginBottom: 6, fontWeight: '600', color: '#444' },
    input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, backgroundColor: '#f9f9f9', fontSize: 16 },
    dropdown: { maxHeight: 160, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, backgroundColor: '#fff', marginTop: 4, elevation: 3, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4 },
    dropdownItem: { padding: 12, borderBottomWidth: 1, borderBottomColor: '#eee' },
    button: { backgroundColor: '#007AFF', padding: 14, borderRadius: 8, alignItems: 'center', marginTop: 10 },
    buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});