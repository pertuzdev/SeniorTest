import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CharacterListScreen from '@/screens/CharacterListScreen/CharacterListScreen';
import CharacterDetailScreen from '@/screens/CharacterDetailScreen';
import {HomeNavigatorParamList} from './HomeNavigator.types';

const Stack = createNativeStackNavigator<HomeNavigatorParamList>();

export enum HomeNavigatorRoutes {
  CharacterList = 'CharacterList',
  CharacterDetail = 'CharacterDetail',
}

const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={HomeNavigatorRoutes.CharacterList}
        component={CharacterListScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={HomeNavigatorRoutes.CharacterDetail}
        component={CharacterDetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
