import { StyleSheet, View, Image } from 'react-native';

import Text from "../../customComps/Text";

import theme from '../../../theme';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 4,
    marginTop: 7,
  },
  item: {
    marginHorizontal: 15,
    marginBottom: 3,
    flexGrow: 0,
  },
  image: {
    height:65,
    width:65,
    borderRadius: 10,
    marginLeft: 10
  },
  language: {
    backgroundColor : theme.colors.primary, 
    color:"white",
    borderRadius: 3,
    padding: 4
  }
});

const ItemData = ({item}) => {
    return(
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{ uri: item.ownerAvatarUrl }}
          />
          <View>
            <Text fontWeight="bold" style={styles.item}>{item.fullName}</Text>
            <Text style={[styles.item, {color:"gray", paddingRight: 55}]}>{item.description}</Text>
            <View style={styles.container}>
                <Text style={[styles.item, styles.language]}>{item.language}</Text>
            </View>
          </View>
        </View>
    )
}

export default ItemData