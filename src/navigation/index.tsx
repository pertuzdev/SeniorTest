import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {useUserTheme} from '@/context/ThemeContext';
import {AppNavigator} from '@/navigation/AppNavigator';
import {theme} from '@/theme';

export const RootNavigator = () => {
  const {theme: userTheme} = useUserTheme();

  return (
    <NavigationContainer theme={theme[userTheme]}>
      <AppNavigator />
    </NavigationContainer>
  );
};
