import { Text, type TextProps, StyleSheet, StyleProp, TextStyle } from 'react-native';
import { GlobalStyles } from '../themes/GlobalStyles';

interface Props extends TextProps {
  estilo?: StyleProp<TextStyle>,
};

export const Pantalla = ({children, estilo, ...rest}:Props) => {
  return (
    <Text style={[GlobalStyles.pantallaPrincipal, estilo]} {...rest}>
        {children}
    </Text>
  )
}