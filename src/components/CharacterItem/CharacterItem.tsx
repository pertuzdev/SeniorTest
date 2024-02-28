import {HomeNavigatorRoutes} from '@/navigation/HomeNavigator/HomeNavigator';
import {HomeNavigatorParamList} from '@/navigation/HomeNavigator/HomeNavigator.types';
import {getNameInitials} from '@/utils/getNameInitials';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Pressable, View} from 'react-native';
import {useCustomTheme} from '../hooks/useCustomTheme';
import {AppText} from '../ui';
import {styles} from './CharacterItem.styles';
import {CharacterItemProps} from './CharacterItem.types';
import {typography} from '@/theme';
import {ArrowRight} from '../ui/icons/icons';

const CharacterItem = ({character}: CharacterItemProps) => {
  const {colors} = useCustomTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeNavigatorParamList>>();
  return (
    <Pressable
      style={styles.characterContainer}
      onPress={() => navigation.navigate(HomeNavigatorRoutes.CharacterDetail)}>
      <View
        style={[
          styles.characterContentWrapper,
          {backgroundColor: colors.card},
        ]}>
        <View style={styles.cardLeft}>
          <View style={[styles.avatar, {borderColor: colors.text}]}>
            <AppText style={styles.nameInitials}>
              {getNameInitials(character.name)}
            </AppText>
          </View>

          <View>
            <AppText style={[styles.characterName, typography.text]}>
              {character.name}
            </AppText>
            <AppText style={[typography.text]}>{character.birth_year}</AppText>
          </View>
        </View>
        <ArrowRight width={20} height={20} />
      </View>
    </Pressable>
  );
};

export default CharacterItem;
