import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    paddingTop: 20,
    paddingHorizontal: 16,
    gap: 12,
  },
  cardWrapper: {
    flexDirection: 'row',
    width: '100%',
    gap: 20,
    justifyContent: 'space-between',
  },
  phoneData: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
