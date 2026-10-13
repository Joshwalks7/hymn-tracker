import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function HymnCard({ hymn }) {
  return (
    <Pressable style={({ pressed }) => [styles.card, pressed && styles.pressed]}>
      <View style={[styles.number, { backgroundColor: hymn.tint }]}>
        <Text style={styles.numberText}>{hymn.number}</Text>
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{hymn.title}</Text>
        <Text style={styles.author}>{hymn.author}</Text>
        <View style={styles.progressTrack}>
          <View style={[styles.progress, { width: `${hymn.progress}%` }]} />
        </View>
      </View>
      <Text style={styles.chevron}>›</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 18,
    flexDirection: 'row',
    marginBottom: 12,
    minHeight: 96,
    padding: 16,
  },
  pressed: {
    opacity: 0.75,
  },
  number: {
    alignItems: 'center',
    borderRadius: 14,
    height: 56,
    justifyContent: 'center',
    marginRight: 14,
    width: 56,
  },
  numberText: {
    color: '#49614f',
    fontSize: 18,
    fontWeight: '700',
  },
  details: {
    flex: 1,
  },
  title: {
    color: '#27352d',
    fontSize: 16,
    fontWeight: '700',
  },
  author: {
    color: '#8a897f',
    fontSize: 13,
    marginTop: 4,
  },
  progressTrack: {
    backgroundColor: '#edf0e9',
    borderRadius: 3,
    height: 5,
    marginTop: 12,
    overflow: 'hidden',
    width: '85%',
  },
  progress: {
    backgroundColor: '#87a58c',
    borderRadius: 3,
    height: '100%',
  },
  chevron: {
    color: '#b5b8ae',
    fontSize: 26,
    marginLeft: 8,
  },
});
