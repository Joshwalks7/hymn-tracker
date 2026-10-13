import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HomeHeader() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.eyebrow}>GOOD MORNING</Text>
        <Text style={styles.title}>My hymns</Text>
      </View>
      <Pressable accessibilityLabel="Open profile" style={styles.profileButton}>
        <Text style={styles.profileText}>JW</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 24,
    paddingTop: 18,
  },
  eyebrow: {
    color: '#8a897f',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginBottom: 5,
  },
  title: {
    color: '#27352d',
    fontSize: 32,
    fontWeight: '700',
  },
  profileButton: {
    alignItems: 'center',
    backgroundColor: '#d7e2d4',
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
