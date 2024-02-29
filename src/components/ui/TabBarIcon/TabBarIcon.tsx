import React from 'react';
import {AppNavigatorRoutes} from '@/navigation/AppNavigator';

import {HomeIcon, SettingIcon} from '@/components/ui';
import {IconsSelector} from './TabBarIcon.types';

export const TabBarIcon = ({
  color,
  routeName,
}: {
  color: string;
  routeName: AppNavigatorRoutes;
}) => {
  const Icon: IconsSelector = {
    [AppNavigatorRoutes.Home]: (
      <HomeIcon color={color} width={24} height={24} />
    ),
    [AppNavigatorRoutes.Settings]: (
      <SettingIcon color={color} width={24} height={24} />
    ),
  };

  return Icon[routeName];
};
