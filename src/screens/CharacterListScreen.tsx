import CharacterList from '@/components/CharacterList/CharacterList';
import React, {useState} from 'react';
import {TextInput, View} from 'react-native';

const CharacterListScreen = () => {
  const [search, setSearch] = useState('');

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
      <CharacterList search={search} />
    </View>
  );
};

export default CharacterListScreen;
