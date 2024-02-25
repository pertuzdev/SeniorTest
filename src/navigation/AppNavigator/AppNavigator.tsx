import SettingsScreen from '@/screens/SettingsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeNavigator from '../HomeNavigator/HomeNavigator';
import {BottomTabNavigatorParamList} from './AppNavigator.types';
import {TabBarIcon} from '@/components/ui/TabBarIcon/TabBarIcon';

export enum AppNavigatorRoutes {
  Home = 'Home',
  Settings = 'Settings',
}

const Tabs = createBottomTabNavigator<BottomTabNavigatorParamList>();
const AppNavigator = () => {
  const renderTabBarIcon = ({
    color,
    routeName,
  }: {
    color: string;
    routeName: AppNavigatorRoutes;
  }) => {
    return <TabBarIcon color={color} routeName={routeName} />;
  };
  return (
    <Tabs.Navigator
      initialRouteName={AppNavigatorRoutes.Home}
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: 'red',
        tabBarIcon: ({color}) =>
          renderTabBarIcon({color, routeName: route.name}),
      })}>
      <Tabs.Screen
        name={AppNavigatorRoutes.Home}
        component={HomeNavigator}
        options={() => ({
          headerShown: false,
        })}
      />
      <Tabs.Screen
        name={AppNavigatorRoutes.Settings}
        component={SettingsScreen}
      />
    </Tabs.Navigator>
  );
};

export default AppNavigator;
