import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  characterContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterContentWrapper: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    flexDirection: 'row',
    gap: 10,
  },
  textWrapper: {
    marginTop: 10,
  },
  characterName: {
    fontWeight: 'bold',
    color: 'black',
  },
  characterDateOfBirth: {
    color: 'black',
  },
});
