import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

import theme from '../../theme';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: theme.colors.error,
  },
  conten: {
    width: '100%', // Ocupa todo el ancho del contenedor
    marginBottom: 16, // Espaciado inferior entre inputs
  }
});

const FormikTextInput = ({ name, error, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  
  const aplyErrorStyle = error || showError;

  return (
    <View style={styles.conten}>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={aplyErrorStyle}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </View>
  );
};

export default FormikTextInput;