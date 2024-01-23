import { View, Text } from "react-native"

import FormikTextInput from "../customComps/FormikTextInput"
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

const SignUpForm = ({onSubmit, error}) => {

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                {error && <Text style={styles.errorMessage}>{error}</Text>}
                <FormikTextInput name="username" placeholder="Username" error={error}/>
                <FormikTextInput  name="password" placeholder="Password"  secureTextEntry={true} error={error}/>
                <FormikTextInput  name="passwordConfirm" placeholder="Password confirmation"  secureTextEntry={true} error={error}/>
                <Button onPress={onSubmit}>
                    Sign up
                </Button>               
            </View>
        </View>
    )
}

export default SignUpForm;