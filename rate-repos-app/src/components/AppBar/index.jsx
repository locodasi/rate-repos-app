import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

import theme from '../../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    display: 'flex',
    backgroundColor: theme.backgrounds.dark,
    flexDirection: "row",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab url="/">Repositorie</AppBarTab>
        <AppBarTab url="/signin">Sign in</AppBarTab>
      </ScrollView>
    </View>
  )
};

export default AppBar;