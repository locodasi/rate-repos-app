import React from 'react';

import Main from './src/components/Main';

import { StrictMode } from 'react';
import { NativeRouter } from 'react-router-native';

const App = () => {
  return (
    <StrictMode>
      <NativeRouter>
        <Main />
      </NativeRouter>
    </StrictMode>
    )
};

export default App;
