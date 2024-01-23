import React, { useState } from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';

import RepositoryItem from './RepositoryItem';
import useRepositories from "../../hooks/useRepositories"
import { useNavigate } from 'react-router-native';

import HeaderComponent from './HeaderComponent';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  }
});

export const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({repositories, compHeader, onEndReach}) => {

  const navigate = useNavigate();
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

    return(
      <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({item}) => ( 
        <TouchableOpacity onPress={()=> navigate(`repository/${item.id}`)}>
          <RepositoryItem item={item} />
        </TouchableOpacity>
      )}
      ListHeaderComponent={compHeader}
      keyExtractor={item => item.id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
    );
}

const RepositoryList = () => {

  const [order, setOrder] = useState("default");
  const [filter, setFilter] = useState("");

  const {repositories, loading, fetchMore } = useRepositories({
    first: 7,
    orderBy: order !== "default" ? "RATING_AVERAGE" : "CREATED_AT",
    orderDirection: order === "asc" ? "ASC" : "DESC",
    searchKeyword: filter
  });

  if(loading){
    return(<></>)
  }

  const comp = <HeaderComponent 
                valueOrder={order} 
                setOrder={setOrder}  
                setFilter={setFilter}
                valueFilter={filter}
              />

  const onEndReach = () => {
    fetchMore();
  };
    
  return (
      <RepositoryListContainer 
        repositories={repositories} 
        compHeader={comp} 
        onEndReach={onEndReach}
      />
  );
};

export default RepositoryList;