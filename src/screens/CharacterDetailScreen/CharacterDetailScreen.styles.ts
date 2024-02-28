import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
    gap: 8,
  },
  characterName: {
    fontWeight: '500',
  },
  iconsWrapper: {
    flexDirection: 'row',
    gap: 12,
  },
  badge: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 50,
  },
});
