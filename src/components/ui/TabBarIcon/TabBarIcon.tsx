import React from 'react';
import {AppNavigatorRoutes} from '@/navigation/AppNavigator/AppNavigator';
import {IconsSelector} from '@/navigation/AppNavigator/AppNavigator.types';
import {HomeIcon, SettingIcon} from '../icons/icons';

export const TabBarIcon = ({
  color,
  routeName,
}: {
  color: string;
  routeName: AppNavigatorRoutes;
}) => {
  const icon: IconsSelector = {
    [AppNavigatorRoutes.Home]: (
      <HomeIcon color={color} width={24} height={24} />
    ),
    [AppNavigatorRoutes.Settings]: (
      <SettingIcon color={color} width={24} height={24} />
    ),
  };

  return icon[routeName];
};
