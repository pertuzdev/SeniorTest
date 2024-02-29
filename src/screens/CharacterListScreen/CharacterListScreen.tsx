import {CharacterList, Header} from '@/components';
import {useCustomTheme} from '@/hooks';
import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {styles} from './CharacterListScreen.styles';

const CharacterListScreen = () => {
  const [search, setSearch] = useState('');
  const {colors} = useCustomTheme();

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Header title="Personajes" isThemeToggle />

      <TextInput
        style={[
          styles.searchBar,
          {
            borderColor: colors.border,
            backgroundColor: colors.card,
            color: colors.text,
          },
        ]}
        onChangeText={setSearch}
        value={search}
        placeholder="Buscar personaje de Star Wars"
        placeholderTextColor={colors.mediumGray}
      />
      <CharacterList search={search} />
    </View>
  );
};

export default CharacterListScreen;
