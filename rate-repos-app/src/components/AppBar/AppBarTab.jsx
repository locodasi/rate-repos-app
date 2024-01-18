import {StyleSheet} from "react-native"
import { Link } from "react-router-native";

import Text from "../customComps/Text"

import AuthStorageContext from '../../contexts/AuthStorageContext';
import { useContext } from 'react';
import { useApolloClient } from "@apollo/client";

const styles = StyleSheet.create({
    flexItem: {
      margin: 5,
      color: 'white',
      fontSize: 18,
      marginBottom: 10
    },
  });


const AppBarTab = ({ url, children, logout}) => {
    return (
      <Link to={url} onPress={logout}>
          <Text style={styles.flexItem}>{children}</Text>
      </Link>  
    )
}

export default AppBarTab