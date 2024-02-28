import React from 'react';
import {View} from 'react-native';
import {AppText, Avatar} from '../ui';
import {GenderIcon, RocketIcon, ThumbsUpIcon} from '../ui/icons/icons';
import {typography} from '@/theme';
import {styles} from './CharacterProfile.styles';
import {useCustomTheme} from '@/hooks/useCustomTheme';

const CharacterProfile = () => {
  const {colors} = useCustomTheme();
  return (
    <View style={[styles.profile, {backgroundColor: colors.primary}]}>
      <View>
        <Avatar name="Luke Sky" width={90} height={90} />
      </View>

      <AppText style={[typography.title, styles.characterName]}>
        Luke Skywalker
      </AppText>

      <View style={styles.iconsWrapper}>
        <View style={styles.badge}>
          <GenderIcon width={30} height={30} />
        </View>
        <View style={styles.badge}>
          <RocketIcon width={30} height={30} />
        </View>
        <View style={styles.badge}>
          <ThumbsUpIcon width={30} height={30} />
        </View>
      </View>
    </View>
  );
};

export default CharacterProfile;
