import { View, Text } from "react-native"

import FormikTextInput from "../customComps/FormikTextInput"
import FormikNumericInput from "../customComps/FormikNumericInput";
import FormikMultilineInput from "../customComps/FormikMultilineInput";

import Button from "../customComps/Button";

import { StyleSheet } from 'react-native';

import theme from "../../theme";

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center', // Alinea los elementos en el centro verticalmente
      paddingHorizontal: 16, // Espaciado horizontal
      backgroundColor: 'white',
    },
    form: {
      marginTop: 20,
      alignItems: 'center',
    },
    errorMessage: {
      color:theme.colors.error,
      marginBottom: 8
    }
  });

const ReviewCreateForm = ({onSubmit, error}) =>{

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                {error && <Text style={styles.errorMessage}>{error}</Text>}
                <FormikTextInput name="ownerName" placeholder="Repository owner name" error={error}/>
                <FormikTextInput  name="repositoryName" placeholder="Repository name" error={error}/>
                <FormikNumericInput  name="rating" placeholder="Raiting between 0 and 100" error={error}/>
                <FormikMultilineInput  name="text" placeholder="Review" error={error}/>
                <Button onPress={onSubmit}>
                    Create a review
                </Button>               
            </View>
        </View>
    )
}

export default ReviewCreateForm;