import React from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';

import RepositoryItem from './RepositoryItem';
import useRepositories from "../../hooks/useRepositories"

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;


const RepositoryList = () => {

  const {repositories, loading} = useRepositories();

  if(loading){
    return(<></>)
  }

  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
    
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => <RepositoryItem item={item} />}
      keyExtractor={item => item.id}
    />
  );
};

export default RepositoryList;