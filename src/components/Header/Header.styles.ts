import {HEADER_HEIGHT} from '@/utils';
import {StyleSheet} from 'react-native';

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
