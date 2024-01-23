import React from 'react';

import Main from './src/components/Main';

import createApolloClient from './src/utils/apolloClient';

import { StrictMode } from 'react';
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';

import AuthStorage from './src/utils/authStorage';

import {AuthStorageContext} from './src/contexts/AuthStorageContext';

const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

//const apolloClient = createApolloClient();

const App = () => {
  return (
    <StrictMode>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <Main />
          </AuthStorageContext.Provider>
        </ApolloProvider>
      </NativeRouter>
    </StrictMode>
    )
};

export default App;
