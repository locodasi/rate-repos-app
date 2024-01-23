import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate  } from 'react-router-native';

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import Repository from './RepositoryList/Repository';
import ReviewForm from './ReviewForm';
import SignUp from './SignUp';
import MyReviews from './MyReviews';

import theme from '../theme';

const style = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.backgrounds.mainBackground,
  },
});


const Main = () => {
  return (
    <View style={style.container}>
      <AppBar />
      <Routes>
        <Route path='/' exact element={<RepositoryList />} />
        <Route path='/signin' exact element={<SignIn />} />
        <Route path='/signin' exact element={<SignIn />} />
        <Route path='/repository/:id' exact element={<Repository />} />
        <Route path='/review' exact element={<ReviewForm />} />
        <Route path='/signup' exact element={<SignUp />} />
        <Route path='/myreviews' exact element={<MyReviews />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>     
    </View>
  );
};

export default Main;


const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: "row"
  },
  flexItemA: {
    flexGrow: 0,
    backgroundColor: 'green',
  },
  flexItemB: {
    flexGrow: 1,
    backgroundColor: 'blue',
  },
});

const FlexboxExample = () => {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexItemA}>
        <Text>Flex item A</Text>
      </View>
      <View style={styles.flexItemB}>
        <Text>Flex item B</Text>
      </View>
      <View style={styles.flexItemA}>
        <Text>Flex item A</Text>
      </View>  
      <View style={styles.flexItemB}>
        <Text>Flex item a</Text>
      </View>
    </View>
  );
};