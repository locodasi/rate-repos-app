import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native';

import Text from './Text';
import theme from '../../theme';

const styles = StyleSheet.create({
    container: {
        width: '100%', // Ocupa todo el ancho del contenedor
        height: 40,
        backgroundColor: theme.colors.primary,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: theme.roundness,
        marginBottom: 10
      },
  text: {
    color: 'white',
  },
});

const Button = ({ children, style, ...props }) => {
  const buttonStyle = [styles.container, style];

  return (
    <TouchableWithoutFeedback {...props}>
      <View style={buttonStyle}>
        <Text style={styles.text} fontWeight="bold">
          {children}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Button;