import {useTheme} from '@react-navigation/native';

import {typography} from '@/theme';
import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import {styles} from './Header.styles';
import {HeaderProps} from './Header.types';

const Header = (props: HeaderProps) => {
  const safeArea = useSafeAreaInsets();
  const {title} = props;

  const {colors} = useTheme();

  return (
    <>
      <View
        style={[
          styles.statusBar,
          {
            height: safeArea.top,
            backgroundColor: colors.primary,
          },
        ]}>
        <SafeAreaView>
          <StatusBar barStyle="dark-content" backgroundColor={colors.primary} />
        </SafeAreaView>
      </View>
      <View
        style={[
          styles.headerContainer,
          {top: safeArea.top, backgroundColor: colors.primary},
        ]}>
        <View style={styles.rowWrapper}>
          <Text style={[{color: '#000'}, typography.title]}>{title}</Text>
        </View>
        <ThemeToggle />
      </View>
    </>
  );
};

export default Header;
