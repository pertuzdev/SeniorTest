import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {useColorScheme} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'THEME';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const useUserTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useSidebarContext must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({children}: ThemeProviderProps) => {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState<Theme | null>(null);

  const setThemePreference = async (themeSelected: Theme) => {
    await AsyncStorage.setItem(STORAGE_KEY, themeSelected);
  };

  const getThemePreference = useCallback(async () => {
    try {
      return await AsyncStorage.getItem(STORAGE_KEY);
    } catch {
      return scheme || 'light';
    }
  }, [scheme]);

  const toggleTheme = async () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    setThemePreference(newTheme);
  };

  useEffect(() => {
    getThemePreference().then(themePreference => {
      if (themePreference) {
        setTheme(themePreference as Theme);
      }
    });
  }, [getThemePreference]);

  return (
    <ThemeContext.Provider
      value={{theme: theme || scheme || 'light', toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
