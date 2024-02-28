import {CharacterInfoRow, CharacterProfile, Header} from '@/components';
import {AppText} from '@/components/ui';
import {useCustomTheme} from '@/hooks/useCustomTheme';
import {typography} from '@/theme';
import React from 'react';
import {ScrollView, View} from 'react-native';
import {styles} from './CharacterDetailScreen.styles';

const CharacterDetailScreen = () => {
  const {colors} = useCustomTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Header title="Character" isBackButton />
      <CharacterProfile />
      <ScrollView>
        <View style={[styles.infoTable, {backgroundColor: colors.card}]}>
          <CharacterInfoRow>
            <AppText style={[typography.text]}>100cm</AppText>
          </CharacterInfoRow>
        </View>
      </ScrollView>
    </View>
  );
};

export default CharacterDetailScreen;
