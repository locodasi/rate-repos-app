import {StyleSheet} from "react-native"
import { Link } from "react-router-native";

import Text from "../customComps/Text"

const styles = StyleSheet.create({
    flexItem: {
      margin: 5,
      color: 'white',
      fontSize: 18,
      marginBottom: 10
    },
  });

const AppBarTab = ({ url, children}) => {
    return (
      <Link to={url}>
          <Text style={styles.flexItem}>{children}</Text>
      </Link>  
    )
}

export default AppBarTab