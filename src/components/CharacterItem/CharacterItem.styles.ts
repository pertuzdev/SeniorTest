import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  characterContainer: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 6,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterContentWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  cardLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  characterName: {
    fontWeight: 'bold',
  },
  nameInitials: {
    color: '#000',
  },
});
