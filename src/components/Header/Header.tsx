import {useTheme} from '@react-navigation/native';

import {typography} from '@/theme';
import React from 'react';
import {Platform, StatusBar, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import {styles} from './Header.styles';
import {HeaderProps} from './Header.types';

const Header = (props: HeaderProps) => {
  const safeArea = useSafeAreaInsets();
  const {title} = props;

  const {colors} = useTheme();

  return (
    <View>
      {Platform.OS === 'ios' ? (
        <View
          style={[
            {
              backgroundColor: colors.primary,
              height: safeArea.top,
            },
          ]}
        />
      ) : (
        <StatusBar barStyle="dark-content" backgroundColor={colors.primary} />
      )}

      <View style={[styles.headerContainer, {backgroundColor: colors.primary}]}>
        <View style={styles.rowWrapper}>
          <Text style={[{color: '#000'}, typography.title]}>{title}</Text>
        </View>
        <ThemeToggle />
      </View>
    </View>
  );
};

export default Header;
