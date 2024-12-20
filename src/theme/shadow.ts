import {StyleSheet} from 'react-native';

export const shadow = StyleSheet.create({
  primary: {
    elevation: 5,
    shadowColor: '#000000',
    shadowRadius: 3.84,
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  secondary: {
    elevation: 2,
    shadowColor: '#000000',
    shadowRadius: 3.84,
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    },
  },
});
