import {HomeNavigatorRoutes} from '@/navigation/HomeNavigator/HomeNavigator';
import {HomeNavigatorParamList} from '@/navigation/HomeNavigator/HomeNavigator.types';
import {getNameInitials} from '@/utils/getNameInitials';
import {useNavigation, useTheme} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Pressable, View} from 'react-native';
import {AppText} from '../ui';
import {styles} from './CharacterItem.styles';
import {CharacterItemProps} from './CharacterItem.types';

const CharacterItem = ({character}: CharacterItemProps) => {
  const {colors} = useTheme();
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
        <View style={styles.avatar}>
          <AppText>{getNameInitials(character.name)}</AppText>
        </View>

        <View style={styles.textWrapper}>
          <AppText style={styles.characterName}>{character.name}</AppText>
          <AppText>fecha de nacimiento: {character.birth_year}</AppText>
        </View>
      </View>
    </Pressable>
  );
};

export default CharacterItem;
