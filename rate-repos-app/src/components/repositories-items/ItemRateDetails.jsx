import { StyleSheet, View } from 'react-native';

import RateDetail from './RateDetail';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    padding: 10
  },
  item: {
//    marginLeft: 15,
  //  marginTop: 7,
    flexGrow: 0,
  }
});

const ItemRateDetails = ({item}) => {
    return(
        <View style={styles.container}>
            <RateDetail detail="Stars" value={item.stargazersCount}/>
            <RateDetail detail="Forks" value={item.forksCount}/>
            <RateDetail detail="Reviews" value={item.reviewCount}/>
            <RateDetail detail="Rating" value={item.ratingAverage}/>
        </View>
    )
}

export default ItemRateDetails