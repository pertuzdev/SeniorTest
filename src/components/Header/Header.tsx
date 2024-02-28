import {useNavigation, useTheme} from '@react-navigation/native';

import {typography} from '@/theme';
import React from 'react';
import {Platform, Pressable, StatusBar, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import {styles} from './Header.styles';
import {HeaderProps} from './Header.types';
import {ArrowLeftIcon} from '../ui/icons/icons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeNavigatorParamList} from '@/navigation/HomeNavigator/HomeNavigator.types';

const ICON_SIZE = 24;
const ZERO = 0;

const Header = ({
  title,
  isThemeToggle = false,
  isBackButton = false,
  backgroundColor,
  titleColor,
}: HeaderProps) => {
  const safeArea = useSafeAreaInsets();
  const {colors} = useTheme();
  const bgColorSelected = backgroundColor || colors.primary;
  const navigation =
    useNavigation<NativeStackNavigationProp<HomeNavigatorParamList>>();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      {Platform.OS === 'ios' ? (
        <View
          style={[
            {
              backgroundColor: bgColorSelected,
              height: safeArea.top,
            },
          ]}
        />
      ) : (
        <StatusBar barStyle="dark-content" backgroundColor={bgColorSelected} />
      )}

      <View
        style={[styles.headerContainer, {backgroundColor: bgColorSelected}]}>
        {isBackButton && (
          <Pressable hitSlop={10} onPress={handleGoBack}>
            <ArrowLeftIcon width={24} height={24} />
          </Pressable>
        )}
        <View style={[styles.rowWrapper]}>
          <Text
            style={[
              styles.title,
              typography.title,
              {
                marginLeft: isBackButton ? -ICON_SIZE : ZERO,
                marginRight: isThemeToggle ? -ICON_SIZE : ZERO,
                color: titleColor,
              },
            ]}>
            {title}
          </Text>
        </View>
        {isThemeToggle && <ThemeToggle />}
      </View>
    </View>
  );
};

export default Header;
