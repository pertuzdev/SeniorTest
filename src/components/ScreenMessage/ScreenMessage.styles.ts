import {screenHeight} from '@/utils/dimensions';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  messageScreenWrapper: {
    height: screenHeight - 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    maxWidth: 250,
    textAlign: 'center',
    fontSize: 16,
  },
});
