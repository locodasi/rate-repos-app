import { View, TouchableWithoutFeedback } from "react-native"

import FormikTextInput from "./customComps/FormikTextInput"
import Text from "./customComps/Text"

import { StyleSheet } from 'react-native';

import theme from '../theme';

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
    input: {
      width: '100%', // Ocupa todo el ancho del contenedor
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 16, // Espaciado inferior entre inputs
      paddingHorizontal: 8,
      borderRadius: 5
    },
    button: {
      width: '100%', // Ocupa todo el ancho del contenedor
      height: 40,
      backgroundColor: theme.colors.primary,
      textAlign: "center",
      textAlignVertical: "center",
      borderRadius: 5,
      marginBottom: 10
    },
    buttonText: {
      color: 'white',
    },
  });

const SignInForm = ({onSubmit}) => {

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <FormikTextInput name="username" placeholder="Username"/>
                <FormikTextInput  name="password" placeholder="Password"  secureTextEntry={true}/>
                <TouchableWithoutFeedback onPress={onSubmit}>
                    <Text style={[styles.button, styles.buttonText]} fontSize="subheading">Sign In</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

export default SignInForm