import {HomeNavigatorRoutes} from '@/navigation/HomeNavigator/HomeNavigator';
import {HomeNavigatorParamList} from '@/navigation/HomeNavigator/HomeNavigator.types';
import {getNameInitials} from '@/utils/getNameInitials';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './CharacterItem.styles';
import {CharacterItemProps} from './CharacterItem.types';

const CharacterItem = ({character}: CharacterItemProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeNavigatorParamList>>();
  return (
    <Pressable
      style={styles.characterContainer}
      onPress={() => navigation.navigate(HomeNavigatorRoutes.CharacterDetail)}>
      <View style={styles.characterContentWrapper}>
        <View style={styles.avatar}>
          <Text>{getNameInitials(character.name)}</Text>
        </View>

        <View style={styles.textWrapper}>
          <Text style={styles.characterName}>{character.name}</Text>
          <Text style={styles.characterDateOfBirth}>
            fecha de nacimiento: {character.birth_year}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CharacterItem;
