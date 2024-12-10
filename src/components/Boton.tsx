import { Pressable, StyleProp, Text, TextStyle, View } from "react-native";
import { GlobalStyles } from "../themes/GlobalStyles";

interface Props {
    label: string,
    estilo?: StyleProp<TextStyle>,
    onPress?: () => void;
}

export const Boton = ({label, estilo, onPress}:Props) => {
    return (
        <Pressable>
            <Text 
                style={[GlobalStyles.boton , estilo]}
                onPress={onPress}>{label}</Text>
        </Pressable>
    )
};
