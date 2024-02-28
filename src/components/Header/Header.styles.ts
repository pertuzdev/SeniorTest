import {StyleSheet} from 'react-native';

const HEADER_HEIGHT = 50;

export const styles = StyleSheet.create({
  statusBar: {
    zIndex: 2,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: HEADER_HEIGHT,
    paddingHorizontal: 16,
  },
  rowWrapper: {
    flex: 1,
    flexDirection: 'row',

    alignItems: 'center',
    justifyContent: 'center',
  },

  right: {
    flexDirection: 'row',
    gap: 12,
  },
  tagsRow: {
    gap: 12,
  },
});
