import {MoonIcon, SunIcon} from '@/components/ui/icons/icons';
import {useUserTheme} from '@/context/ThemeContext';
import React, {useTransition} from 'react';
import {Pressable} from 'react-native';

const ThemeToggle = () => {
  const {theme, toggleTheme} = useUserTheme();
  const [_, startTransition] = useTransition();

  const handlePress = () => {
    startTransition(() => {
      toggleTheme();
    });
  };
  return (
    <Pressable onPress={handlePress} hitSlop={10}>
      {!theme ? null : theme === 'dark' ? (
        <MoonIcon width={24} height={24} />
      ) : (
        <SunIcon width={24} height={24} />
      )}
    </Pressable>
  );
};

export default ThemeToggle;
