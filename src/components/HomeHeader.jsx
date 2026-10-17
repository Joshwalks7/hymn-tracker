import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeHeader() {
  return (
    <View style={styles.header}>
      <Image
        source={require('../../assets/images/salt_lake_temple.jpg')}
        resizeMode="cover"
        style={styles.backgroundImage}
      />
      <View style={styles.overlay}>
        <View>
          <Text style={styles.eyebrow}>Welcome back to the</Text>
          <Text style={styles.title}>Hymn Tracker</Text>
        </View>
        <Pressable accessibilityLabel="Open profile" style={styles.profileButton}>
          <Text style={styles.profileText}>JW</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
  },
  backgroundImage: {
    bottom: 0,
    borderRadius: 20,
    height: '100%',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    width: '100%',
  },
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(20, 31, 27, 0.32)',
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
