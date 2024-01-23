import {StyleSheet, View} from "react-native"

import Text from "../../customComps/Text"

const styles = StyleSheet.create({
    item: {
      display: "flex",
      flexGrow: 1,
      alignItems: "center"
    },
    text:{
        color:"gray"
    }
  });

const RateDetail = ({detail, value}) => {
    const valueText = value < 1000 ? value : `${(value /1000).toFixed(1)}K`
    return(
        <View style={styles.item}>
            <Text fontWeight="bold">{valueText}</Text>
            <Text style={styles.text}>{detail}</Text>
        </View>
    )
}

export default RateDetail