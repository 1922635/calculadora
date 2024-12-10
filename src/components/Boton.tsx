import { Pressable, StyleProp, Text, TextStyle, View } from "react-native";
import { GlobalStyles } from "../themes/GlobalStyles";

interface Props {
    label: string,
    width: number,
    estilo?: StyleProp<TextStyle>,
    onPress?: () => void;
}

export const Boton = ({label, estilo, width, onPress}:Props) => {
    return (
        <Pressable>
            <Text 
                style={[GlobalStyles.boton , estilo, {width}]}
                onPress={onPress}>{label}</Text>
        </Pressable>
    )
};
