import { Pressable, StyleSheet, Text, View } from 'react-native';

const tabs = [
  { icon: '⌂', label: 'Home', selected: true },
  { icon: '＋', label: 'Add hymn' },
  { icon: '♡', label: 'Favorites' },
];

export default function BottomNav() {
  return (
    <View style={styles.nav}>
      {tabs.map((tab) => (
        <Pressable key={tab.label} style={styles.tab}>
          <Text style={[styles.icon, tab.selected && styles.selected]}>{tab.icon}</Text>
          <Text style={[styles.label, tab.selected && styles.selected]}>{tab.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    alignItems: 'flex-end',
    borderTopColor: '#e7e5de',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 8,
    paddingTop: 12,
  },
  tab: {
    alignItems: 'center',
    minWidth: 78,
  },
  icon: {
    color: '#a4a69d',
    fontSize: 23,
    height: 27,
  },
  label: {
    color: '#a4a69d',
    fontSize: 11,
    marginTop: 3,
  },
  selected: {
    color: '#55735b',
    fontWeight: '700',
  },
});
