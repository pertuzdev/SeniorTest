import React from 'react';
import {Text} from 'react-native';
import {styles} from './AppText.styles';
import {AppTextProps} from './AppText.types';
import {useTheme} from '@react-navigation/native';

export const AppText = ({children, style: customStyles}: AppTextProps) => {
  const {colors} = useTheme();
  return (
    <Text style={[styles.text, {color: colors.text}, customStyles]}>
      {children}
    </Text>
  );
};
