import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  profile: {
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
    gap: 12,
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
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
