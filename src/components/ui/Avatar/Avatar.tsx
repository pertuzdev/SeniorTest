import React from 'react';
import {View} from 'react-native';

import {getNameInitials} from '@/utils';
import {styles} from './Avatar.styles';
import {useCustomTheme} from '@/hooks/useCustomTheme';
import {AppText} from '@/components/ui';

export const Avatar = ({
  name,
  height = 50,
  width = 50,
}: {
  name: string | undefined;
  width?: number;
  height?: number;
}) => {
  const {colors} = useCustomTheme();
  return (
    <View
      style={[
        styles.avatar,
        {borderColor: colors.text, borderWidth: width * 0.05, width, height},
      ]}>
      <AppText style={[styles.nameInitials, {fontSize: width * 0.3}]}>
        {getNameInitials(name)}
      </AppText>
    </View>
  );
};
