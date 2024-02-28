import {Header} from '@/components';
import {AppText, Avatar} from '@/components/ui';
import {useCustomTheme} from '@/hooks/useCustomTheme';
import React from 'react';
import {View} from 'react-native';
import {styles} from './CharacterDetailScreen.styles';
import {typography} from '@/theme';
import {
  GenderIcon,
  RocketIcon,
  ThumbsUpIcon,
} from '@/components/ui/icons/icons';

const CharacterDetailScreen = () => {
  const {colors} = useCustomTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.background}]}>
      <Header title="Character" />
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
    </View>
  );
};

export default CharacterDetailScreen;
