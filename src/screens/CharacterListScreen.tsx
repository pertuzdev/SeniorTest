import {useGetCharacters} from '@/modules/Wiki/services';
import {HomeNavigatorRoutes} from '@/navigation/HomeNavigator/HomeNavigator';
import {HomeNavigatorParamList} from '@/navigation/HomeNavigator/HomeNavigator.types';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const CharacterListScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeNavigatorParamList>>();

  const [search, setSearch] = useState('');

  const getNameInitials = (name: string) => {
    const nameArray = name.split(' ');
    return nameArray[0][0] + nameArray[nameArray.length - 1][0];
  };

  const {data} = useGetCharacters({search});
  const characters = data?.pages.flatMap(page => page.results);

  return (
    <View style={{flex: 1}}>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          margin: 16,
        }}
        onChangeText={setSearch}
        value={search}
        placeholder="Buscar personaje de Star Wars"
      />

      <FlatList
        data={characters}
        style={{flex: 1}}
        renderItem={({item}) => {
          return (
            <Pressable
              style={styles.itemContainer}
              onPress={() =>
                navigation.navigate(HomeNavigatorRoutes.CharacterDetail)
              }>
              <View
                style={{
                  backgroundColor: 'white',
                  padding: 20,
                  marginVertical: 8,
                  marginHorizontal: 16,
                  borderRadius: 10,
                  flexDirection: 'row',
                  gap: 10,
                }}>
                <View style={styles.avatar}>
                  <Text>{getNameInitials(item.name)}</Text>
                </View>

                <View style={{marginTop: 10}}>
                  <Text style={{fontWeight: 'bold', color: 'black'}}>
                    {item.name}
                  </Text>
                  <Text style={{color: 'black'}}>
                    fecha de nacimiento: {item.birth_year}
                  </Text>
                </View>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
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
});

export default CharacterListScreen;
