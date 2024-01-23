import { ItemSeparator } from "..";
import { StyleSheet, View } from "react-native";

import Text from "../../customComps/Text";
import theme from "../../../theme";

import {format} from 'date-fns/format'

import ButtonsReview from "./ButtonsReview";

const styles = StyleSheet.create({
    generalContainer:{
      backgroundColor: "white",
      padding:8,
    },
    container: {
      flexGrow: 1,
      flexShrink: 1,
      flexDirection: "row"
    },
    containerData: {
        display: "flex",
        marginBottom: 4,
        paddingRight: 10
      },
      item: {
        marginHorizontal: 15,
        marginBottom: 3,
      },
      raitingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,  // Ajusta según tus preferencias
        height: 30,  // Ajusta según tus preferencias
        borderRadius: 15,  // La mitad del ancho y alto para hacer un círculo
        borderWidth: 2,  // Ancho del borde
        borderColor: theme.colors.primary,
      },
      raitingText: {
        color: theme.colors.primary,
      },
  });

const ReviewItem = ({ review, refetch }) => {
    // Single review item
    const date = format(review.createdAt, 'dd.MM.yyyy');

    return (
        <>
            <ItemSeparator />
            <View style={styles.generalContainer}>
              <View style={styles.container}>
                  <View style={styles.raitingContainer}>
                      <Text style={styles.raitingText}>{review.rating}</Text>
                  </View>
                  <View style={styles.containerData}>
                      <Text fontWeight="bold" style={styles.item}>
                        {review.repository?.fullName || review.user.username}
                        </Text>
                      <Text color="textSecondary" style={styles.item}>{date}</Text>
                      <Text style={styles.item}>{review.text}</Text> 
                  </View>   
              </View>
              {review.repository?.fullName && <ButtonsReview review={review} refetch={refetch}/>}
            </View>
        </>     
    )
  };

  export default ReviewItem;