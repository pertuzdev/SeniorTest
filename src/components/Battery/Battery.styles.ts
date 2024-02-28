import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  batteryWrapper: {
    position: 'relative',
  },
  battery: {
    flexDirection: 'row',
  },
  batteryLine: {
    height: 100,
    width: 3.29,
    borderWidth: 0.1,
    borderColor: '#fff',
    borderRadius: 100,
    backgroundColor: '#47bb78',
    //backgroundColor: '#edf2f6'
  },
  batteryPercentage: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#fff',
  },
});
