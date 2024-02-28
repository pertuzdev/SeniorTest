import {CharacterInfoRow, CharacterProfile, Header} from '@/components';
import CharacterBulletList from '@/components/CharacterBulletList/CharacterBulletList';
import {AppText, Spinner} from '@/components/ui';
import {useCharacter} from '@/context/CharacterContext';
import {useCustomTheme} from '@/hooks/useCustomTheme';
import {
  useGetCharacterHomeWorld,
  useGetFilms,
  useGetSpecies,
} from '@/modules/Wiki/services';
import {typography} from '@/theme';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {styles} from './CharacterDetailScreen.styles';

const CharacterDetailScreen = () => {
  const {colors} = useCustomTheme();
  const {character} = useCharacter();
  const {data: planet, isLoading: isPlanetLoading} = useGetCharacterHomeWorld({
    url: character?.homeworld,
  });
  const planetName = planet?.name;
  const {filmsTitles, isFilmsLoading} = useGetFilms({
    filmsURL: character?.films,
  });
  const {species, isSpeciesLoading} = useGetSpecies({
    speciesURL: character?.species,
  });
  const speciesNames = species.map(s => s.name);
  const languages = species.map(s => s.language);

  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Header title="Character" isBackButton />
      <CharacterProfile />
      <ScrollView>
        <View style={[styles.infoTable, {backgroundColor: colors.card}]}>
          <CharacterInfoRow title="Height">
            <AppText
              style={[typography.text]}>{`${character?.height} cm`}</AppText>
          </CharacterInfoRow>
          <CharacterInfoRow title="Mass">
            <AppText
              style={[typography.text]}>{`${character?.mass} kg`}</AppText>
          </CharacterInfoRow>
          <CharacterInfoRow title="Home planet">
            <AppText style={[typography.text]}>
              {isPlanetLoading ? <Spinner /> : planetName}
            </AppText>
          </CharacterInfoRow>
          <CharacterInfoRow title="Peliculas en las que está presente">
            <CharacterBulletList
              list={filmsTitles}
              isLoading={isFilmsLoading}
            />
          </CharacterInfoRow>
          <CharacterInfoRow title="Hair color">
            <AppText style={[typography.text]}>{character?.hair_color}</AppText>
          </CharacterInfoRow>
          <CharacterInfoRow title="Skin color">
            <AppText style={[typography.text]}>{character?.skin_color}</AppText>
          </CharacterInfoRow>
          <CharacterInfoRow title="Species">
            <CharacterBulletList
              list={speciesNames}
              isLoading={isSpeciesLoading}
            />
          </CharacterInfoRow>
          <CharacterInfoRow title="Language">
            <CharacterBulletList
              list={languages}
              isLoading={isSpeciesLoading}
            />
          </CharacterInfoRow>
        </View>
      </ScrollView>
    </View>
  );
};

export default CharacterDetailScreen;
