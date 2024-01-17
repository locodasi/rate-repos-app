import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  error: {
    borderColor :theme.colors.error
  },
  input:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,    
    paddingHorizontal: 8,
    borderRadius: theme.roundness
  }
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [
    styles.input,
    error && styles.error,
    style,
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;