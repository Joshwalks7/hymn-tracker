import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeHeader() {
  return (
    <ImageBackground
      source={require('../../assets/images/salt_lake_temple.jpg')}
      imageStyle={styles.backgroundImage}
      style={styles.header}
    >
      <View style={styles.overlay}>
        <View>
          <Text style={styles.eyebrow}>Welcome back to the</Text>
          <Text style={styles.title}>Hymn Tracker</Text>
        </View>
        <Pressable accessibilityLabel="Open profile" style={styles.profileButton}>
          <Text style={styles.profileText}>JW</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    borderRadius: 20,
    overflow: 'hidden',
  },
  backgroundImage: {
    borderRadius: 20,
  },
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(20, 31, 27, 0.48)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 24,
    paddingTop: 18,
    paddingHorizontal: 18,
  },
  eyebrow: {
    color: '#e8eee8',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginBottom: 5,
  },
  title: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: '700',
  },
  profileButton: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.88)',
    borderRadius: 22,
    height: 44,
    justifyContent: 'center',
    width: 44,
  },
  profileText: {
    color: '#49614f',
    fontSize: 13,
    fontWeight: '700',
  },
});
