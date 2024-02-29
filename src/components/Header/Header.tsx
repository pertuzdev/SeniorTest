import {useNavigation} from '@react-navigation/native';

import {ThemeToggle} from '@/components';
import {ArrowLeftIcon, FocusAwareStatusBar} from '@/components/ui';
import {useCustomTheme} from '@/hooks';
import {HomeNavigatorParamList} from '@/navigation/HomeNavigator/HomeNavigator.types';
import {typography} from '@/theme';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {Platform, Pressable, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './Header.styles';
import {HeaderProps} from './Header.types';
import {HEADER_ICON_SIZE, ZERO} from '@/utils';

const Header = ({
  title,
  isThemeToggle = false,
  isBackButton = false,
  isSettings = false,
}: HeaderProps) => {
  const safeArea = useSafeAreaInsets();
  const {colors} = useCustomTheme();
  const bgColorSelected = isSettings ? colors.secondary : colors.primary;
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
        <FocusAwareStatusBar
          barStyle={isSettings ? 'light-content' : 'dark-content'}
          backgroundColor={bgColorSelected}
        />
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
              typography.title,
              {
                marginLeft: isBackButton ? -HEADER_ICON_SIZE : ZERO,
                marginRight: isThemeToggle ? -HEADER_ICON_SIZE : ZERO,
                color: isSettings ? colors.white : colors.black,
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
