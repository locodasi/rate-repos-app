import { View } from "react-native"

import FormikTextInput from "../customComps/FormikTextInput"
import Button from "../customComps/Button";

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center', // Alinea los elementos en el centro verticalmente
      paddingHorizontal: 16, // Espaciado horizontal
      backgroundColor: 'white',
    },
    form: {
      marginTop: 20,
      alignItems: 'center',
    }
  });

const SignInForm = ({onSubmit}) => {

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <FormikTextInput name="username" placeholder="Username"/>
                <FormikTextInput  name="password" placeholder="Password"  secureTextEntry={true}/>
                <Button onPress={onSubmit}>
                    Sign in
                </Button>               
            </View>
        </View>
    )
}

export default SignInForm