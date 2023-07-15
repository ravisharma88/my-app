import React, { ReactElement, useState } from 'react';
import './App.css';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { AppHeader } from './components/header/AppHeader';


function App(): ReactElement {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{colorScheme}} withGlobalStyles withNormalizeCSS>
        <>
          <AppHeader/>
        </>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
