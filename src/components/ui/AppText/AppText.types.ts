import {StyleProp, TextStyle} from 'react-native';

export type AppTextProps = {
  style?: StyleProp<TextStyle>;
  children: JSX.Element | string | string[];
};
