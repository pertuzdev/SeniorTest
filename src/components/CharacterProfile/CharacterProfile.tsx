import React from 'react';
import {View} from 'react-native';

import {
  MarsIcon,
  RocketIcon,
  ThumbsDownIcon,
  ThumbsUpIcon,
  VenusIcon,
  AppText,
  Avatar,
} from '@/components/ui';
import {typography} from '@/theme';
import {styles} from './CharacterProfile.styles';
import {useCustomTheme} from '@/hooks';
import {useCharacter} from '@/context/CharacterContext';

const CharacterProfile = () => {
  const {colors} = useCustomTheme();
  const {character} = useCharacter();

  return (
    <View style={[styles.profile, {backgroundColor: colors.primary}]}>
      <View>
        <Avatar name={character?.name} width={90} height={90} />
      </View>

      <AppText style={[typography.title, styles.characterName]}>
        {character?.name}
      </AppText>

      <View style={styles.iconsWrapper}>
        <View style={styles.badge}>
          {character?.gender === 'male' ? (
            <MarsIcon width={30} height={30} />
          ) : character?.gender === 'female' ? (
            <VenusIcon width={30} height={30} />
          ) : (
            <AppText>N/A</AppText>
          )}
        </View>
        <View style={styles.badge}>
          {character?.starships && character.starships.length > 0 ? (
            <RocketIcon width={30} height={30} />
          ) : (
            <AppText>N/A</AppText>
          )}
        </View>
        <View style={styles.badge}>
          {character?.films && character.films.length > 3 ? (
            <ThumbsUpIcon width={30} height={30} />
          ) : (
            <ThumbsDownIcon width={30} height={30} />
          )}
        </View>
      </View>
    </View>
  );
};

export default CharacterProfile;
