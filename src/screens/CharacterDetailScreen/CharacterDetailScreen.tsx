import {CharacterInfoRow, CharacterProfile, Header} from '@/components';
import {AppText} from '@/components/ui';
import {useCustomTheme} from '@/hooks/useCustomTheme';
import {typography} from '@/theme';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {styles} from './CharacterDetailScreen.styles';
import {useCharacter} from '@/context/CharacterContext';

const CharacterDetailScreen = () => {
  const {colors} = useCustomTheme();
  const {character} = useCharacter();
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
          <CharacterInfoRow title="Peliculas en las que está presente">
            <AppText style={[typography.text]}>{character?.mass}</AppText>
          </CharacterInfoRow>
          <CharacterInfoRow title="Hair color">
            <AppText style={[typography.text]}>{character?.hair_color}</AppText>
          </CharacterInfoRow>
          <CharacterInfoRow title="Skin color">
            <AppText style={[typography.text]}>{character?.skin_color}</AppText>
          </CharacterInfoRow>
          <CharacterInfoRow title="Species">
            <AppText style={[typography.text]}>
              {character?.species && character.species.length === 0 && 'human'}
            </AppText>
          </CharacterInfoRow>
          <CharacterInfoRow title="Language">
            <AppText style={[typography.text]}>{'español'}</AppText>
          </CharacterInfoRow>
        </View>
      </ScrollView>
    </View>
  );
};

export default CharacterDetailScreen;
