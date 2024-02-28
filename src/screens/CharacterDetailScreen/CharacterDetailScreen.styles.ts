import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
    padding: 8,
    borderRadius: 50,
  },
  infoTable: {
    margin: 20,
    borderRadius: 10,
    paddingBottom: 10,
  },
  infoRow: {
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  infoRowLabel: {
    marginBottom: 6,
  },
  line: {
    height: 1,
    marginTop: 10,
  },
});
