import {ReactNode} from 'react';
import {StyleProp, TextStyle} from 'react-native';

export type AppTextProps = {
  style?: StyleProp<TextStyle>;
  children: ReactNode;
};
