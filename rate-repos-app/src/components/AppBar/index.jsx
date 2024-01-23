import React from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';
import Constants from 'expo-constants';
import { useQuery, useApolloClient } from '@apollo/client';

import {ME} from "../../graphql/queries";
import theme from '../../theme';
import AppBarTab from './AppBarTab';

import {useAuthStorage} from '../../contexts/AuthStorageContext';

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

  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const logOut = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab url="/">Repositorie</AppBarTab>
        {(data && data.me) ? (
          <>
            <AppBarTab url="/review">Create a review</AppBarTab>
            <AppBarTab url="/myreviews">My reviews</AppBarTab>
            <AppBarTab url="/signin" logout={logOut}>Log out</AppBarTab>
          </>
        )
         :
         (
          <>
            <AppBarTab url="/signin">Sign in</AppBarTab>  
            <AppBarTab url="/signup">Sign up</AppBarTab>  
          </>
         )}
             
      </ScrollView>
    </View>
  )
};

export default AppBar;