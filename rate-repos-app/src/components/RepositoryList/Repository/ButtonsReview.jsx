import { View, StyleSheet, Alert } from "react-native";
import Button from "../../customComps/Button"

import { useNavigate } from "react-router-native";
import useDeleteReview from "../../../hooks/useDeleteReview";


const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      flexShrink: 1,
      backgroundColor: "white",
      padding:8,
      flexDirection: "row"
    },
    button:{
        flex: 1,
        margin: 5
    }
  });

const ButtonsReview = ({review, refetch}) => {

    const navigate = useNavigate();
    const [deleteReview] = useDeleteReview();
    
    const deletReviewAlert = () => {
        Alert.alert('Delete Review',"Are you sure you want to delete this review?",[
            {
                text: 'Cancel',
                style: 'cancel', // Este botón tendrá un estilo de "cancel" (puede variar según la plataforma)
            },
            {
                text: 'Delete',
                onPress: () => {
                    removeReview();
                },
                style: 'destructive', // Este estilo resalta la acción peligrosa (puede variar según la plataforma)
            },
        ],
        { cancelable: false }); // Esto evita que se cierre el cuadro de diálogo tocando fuera de él
    }

    const removeReview = async() => {
        try {
            await deleteReview({deleteReviewId: review.id});
            refetch();
          } catch (e) {
            console.log(e.message);
          }
    }
    return(
        <View style={styles.container}>
            <Button style={styles.button} onPress={()=> navigate(`/repository/${review.repository.id}`)}>View repository</Button>
            <Button style={styles.button} background="dangerous" onPress={deletReviewAlert}>Delete review</Button>
        </View>
    )
}

export default ButtonsReview;