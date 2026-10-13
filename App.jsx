import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';

import BottomNav from './src/components/BottomNav';
import HomeHeader from './src/components/HomeHeader';
import HymnList from './src/components/HymnList';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <HomeHeader />
        <HymnList />
        <BottomNav />
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
});
