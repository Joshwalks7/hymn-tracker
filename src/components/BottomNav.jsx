import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function BottomNav({ activeScreen, setActiveScreen }) {
    return (
        <View style={styles.navContainer}>
            <Pressable 
                style={[styles.navButton, activeScreen === 'record' && styles.activeButton]} 
                onPress={() => setActiveScreen('record')}
            >
                <Text style={[styles.navText, activeScreen === 'record' && styles.activeText]}>Record</Text>
            </Pressable>

            <Pressable 
                style={[styles.navButton, activeScreen === 'history' && styles.activeButton]} 
                onPress={() => setActiveScreen('history')}
            >
                <Text style={[styles.navText, activeScreen === 'history' && styles.activeText]}>History</Text>
            </Pressable>

            <Pressable 
                style={[styles.navButton, activeScreen === 'stats' && styles.activeButton]} 
                onPress={() => setActiveScreen('stats')}
            >
                <Text style={[styles.navText, activeScreen === 'stats' && styles.activeText]}>Stats</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    navContainer: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        paddingVertical: 10,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        borderRadius: 12,
        marginBottom: 10,
    },
    navButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
    },
    activeButton: {
        backgroundColor: '#007AFF',
    },
    navText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#666',
    },
    activeText: {
        color: '#fff',
    },
});