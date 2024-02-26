import React from 'react';
import {Text} from 'react-native';
import {styles} from './AppText.styles';
import {AppTextProps} from './AppText.types';

export const AppText = ({children, style: customStyles}: AppTextProps) => {
  return <Text style={[styles.text, customStyles]}>{children}</Text>;
};
