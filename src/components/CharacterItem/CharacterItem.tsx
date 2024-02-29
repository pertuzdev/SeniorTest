import {HomeNavigatorRoutes} from '@/navigation/HomeNavigator/HomeNavigator';
import {HomeNavigatorParamList} from '@/navigation/HomeNavigator/HomeNavigator.types';
import {typography} from '@/theme';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Pressable, View} from 'react-native';
import {AngleRight, AppText, Avatar} from '@/components/ui';
import {useCharacter} from '@/context/CharacterContext';
import {useCustomTheme} from '@/hooks';
import {styles} from './CharacterItem.styles';
import {CharacterItemProps} from './CharacterItem.types';

const CharacterItem = ({character}: CharacterItemProps) => {
  const {colors} = useCustomTheme();
  const {setCurrent} = useCharacter();

  const navigation =
    useNavigation<NativeStackNavigationProp<HomeNavigatorParamList>>();

  const handleNavigateToDetail = () => {
    setCurrent(character);
    navigation.navigate(HomeNavigatorRoutes.CharacterDetail);
  };
  return (
    <Pressable
      style={styles.characterContainer}
      onPress={handleNavigateToDetail}>
      <View
        style={[
          styles.characterContentWrapper,
          {backgroundColor: colors.card},
        ]}>
        <View style={styles.cardLeft}>
          <Avatar name={character.name} />

          <View>
            <AppText style={[styles.characterName, typography.text]}>
              {character.name}
            </AppText>
            <AppText style={[typography.text]}>{character.birth_year}</AppText>
          </View>
        </View>
        <AngleRight width={20} height={20} color={colors.text} />
      </View>
    </Pressable>
  );
};

export default CharacterItem;
