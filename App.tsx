import React, {useEffect} from 'react';

import {CharacterProvider} from '@/context/CharacterContext';
import {ThemeProvider} from '@/context/ThemeContext';
import {RootNavigator} from '@/navigation';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import {toastConfig, toastNotification} from '@/utils/toast';
import Toast from 'react-native-toast-message';
import BootSplash from 'react-native-bootsplash';

function App(): React.JSX.Element {
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: () => {
        toastNotification({
          type: 'error',
          message: 'Something went wrong, please try again later',
          position: 'top',
        });
      },
    }),
  });
  useEffect(() => {
    const init = async () => {};

    init().finally(async () => {
      await BootSplash.hide({fade: true});
    });
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <CharacterProvider>
          <RootNavigator />
          <Toast config={toastConfig} />
        </CharacterProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
