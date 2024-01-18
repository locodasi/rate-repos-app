import React from 'react';

import Main from './src/components/Main';

import createApolloClient from './src/utils/apolloClient';

import { StrictMode } from 'react';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';

import Constants from 'expo-constants';

const apolloClient = createApolloClient();

const App = () => {
  console.log(Constants.expoConfig);
  return (
    <StrictMode>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
    </StrictMode>
    )
};

export default App;
