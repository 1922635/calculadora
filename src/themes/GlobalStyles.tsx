import { StyleSheet } from 'react-native'
import { Colores } from './Colores'

export const GlobalStyles = StyleSheet.create({
    boton: {
        width:80,
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        fontWeight: 300,
        borderColor: Colores.bordes,
        borderWidth: 2,
    },
    botonOperaciones: {
        backgroundColor: Colores.botonesOperacion
    },
    botonNumeros: {
        backgroundColor: Colores.botonesNumero
    },
    botonOtros: {
        backgroundColor: Colores.botonesOtro
    },
    pantallaPrincipal: {
        fontSize: 70,
        textAlign: 'right',
        fontWeight:400,
        width: '90%',
    },
    pantallaSecundaria: {
        fontSize: 40,
        fontWeight: 300,
    },
})