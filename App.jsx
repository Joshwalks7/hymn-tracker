import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import BottomNav from './src/components/BottomNav';
import HomeHeader from './src/components/HomeHeader';
import RecordSongsForm from './src/components/RecordSongsForm';
import HistoryScreen from './src/components/HistoryScreen';
import StatsScreen from './src/components/StatsScreen';

export default function App() {
    // Set Record as the default opening screen
    const [currentScreen, setCurrentScreen] = useState('record');

    const renderScreen = () => {
        switch (currentScreen) {
            case 'history':
                return <HistoryScreen />;
            case 'stats':
                return <StatsScreen />;
            case 'record':
            default:
                return <RecordSongsForm />;
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StatusBar barStyle="dark-content" />
            <View style={styles.container}>
                <HomeHeader />
                
                <View style={styles.screenContainer}>
                    {renderScreen()}
                </View>

                <BottomNav activeScreen={currentScreen} setActiveScreen={setCurrentScreen} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#f7f5f0',
        flex: 1,
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    screenContainer: {
        flex: 1,
        marginBottom: 10,
    },
});