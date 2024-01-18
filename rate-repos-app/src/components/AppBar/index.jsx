import React, { useContext } from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import { useQuery, useApolloClient } from '@apollo/client';

import {ME} from "../../graphql/queries";
import theme from '../../theme';
import AppBarTab from './AppBarTab';

import AuthStorageContext from '../../contexts/AuthStorageContext';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: 'flex',
    backgroundColor: theme.backgrounds.dark,
    flexDirection: "row",
  },
});


const AppBar = () => {
  const { data } = useQuery(ME, {
    fetchPolicy: "cache-and-network"
  });

  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const logOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab url="/">Repositorie</AppBarTab>
        {(data && data.me) ? <AppBarTab url="/signin" logout={logOut}>Log out</AppBarTab> : <AppBarTab url="/signin">Sign in</AppBarTab> }      
      </ScrollView>
    </View>
  )
};

export default AppBar;