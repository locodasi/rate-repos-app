import { StyleSheet, View } from 'react-native';

import ItemData from './ItemData';
import ItemRateDetails from "./ItemRateDetails"

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "white",
    padding:8,
  }
});

const RepositoryItem = ({item}) => {
    return(
        <View style={styles.container}>
          <ItemData item={item} />
          <ItemRateDetails item={item} />
        </View>
    )
}

export default RepositoryItem