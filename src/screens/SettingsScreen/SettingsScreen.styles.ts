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

  card: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    flex: 1,
    borderRadius: 10,
  },
  cardLabel: {
    marginBottom: 6,
    fontSize: 15,
  },
  phoneData: {
    fontSize: 22,
    fontWeight: 'bold',
  },
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
