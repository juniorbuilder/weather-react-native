/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ThemeProvider} from 'styled-components';
import {DarkMode} from '../theme/theme';
import {Routes} from '../routes';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={DarkMode}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
