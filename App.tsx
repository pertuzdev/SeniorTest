import React from 'react';

import {RootNavigator} from '@/navigation';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {ThemeProvider} from '@/context/ThemeContext';
import {CharacterProvider} from '@/context/CharacterContext';

function App(): React.JSX.Element {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <CharacterProvider>
          <RootNavigator />
        </CharacterProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
