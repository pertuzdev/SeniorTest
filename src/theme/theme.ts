import {DarkTheme, DefaultTheme, Theme} from '@react-navigation/native';

export type ITheme = {
  colors: {
    secondary: string;
    lightGray: string;
    error: string;
    activeTab: string;
    inactiveTab: string;
    mediumGray: string;
    black: string;
    white: string;
    green: string;
    stale: string;
  };
} & Theme;

export interface CustomTheme {
  light: ITheme;
  dark: ITheme;
}

export const theme: CustomTheme = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#f4ba0d',
      secondary: '#2d3748',
      error: '#D32F2F',
      text: '#212121',
      border: '#00000026',
      activeTab: '#1976D2',
      inactiveTab: '#757575',
      background: '#f1f3f4',
      card: '#FFFFFF',
      lightGray: '#00000026',
      mediumGray: '#00000066',
      black: '#000',
      white: '#FFF',
      green: '#47bb78',
      stale: '#edf2f6',
    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: '#f4ba0d',
      secondary: '#2d3748',
      error: '#D32F2F',
      text: '#fafafa',
      border: '#FFFFFF',
      activeTab: '#4FC3F7',
      inactiveTab: '#FFFFFF',
      background: '#1d1d1f',
      card: '#09090b',
      lightGray: '#00000026',
      mediumGray: '#d6d4d4',
      black: '#000',
      white: '#FFF',
      green: '#47bb78',
      stale: '#edf2f6',
    },
  },
};
