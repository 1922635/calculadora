import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Pantalla } from './src/components/Pantalla';
import { Boton } from './src/components/Boton';
import { useCalculadora, Operadores } from './src/hooks/useCalculadora';
import { GlobalStyles } from './src/themes/GlobalStyles';

export default function App() {

  const {formula, numeroAnterior, construirNumero, clean, cambiarSigno, borrarDigito,
         operacionCalcular,resultado  } = useCalculadora();

  return (
  
    <View style={GlobalStyles.container}>    
      <Pantalla numberOfLines={1} estilo={GlobalStyles.pantallaPrincipal} adjustsFontSizeToFit >{formula}</Pantalla>

      {formula === numeroAnterior ? (
        <Pantalla estilo={GlobalStyles.pantallaSecundaria} numberOfLines={1} adjustsFontSizeToFit> </Pantalla>
      ) : (
        <Pantalla estilo={GlobalStyles.pantallaSecundaria} numberOfLines={1} adjustsFontSizeToFit>{numeroAnterior}</Pantalla>
      )}
      
     
      
      
      <StatusBar style="auto" />

    <View style={GlobalStyles.fila}>
      <Boton estilo={GlobalStyles.botonOtros} label='C' onPress={clean}></Boton>
      <Boton estilo={GlobalStyles.botonOtros} label='+/-' onPress={cambiarSigno}></Boton>
      <Boton estilo={GlobalStyles.botonOtros} label='del' onPress={borrarDigito}></Boton>
      <Boton estilo={GlobalStyles.botonOperaciones} label='/' onPress={() => operacionCalcular(Operadores.dividir)}></Boton>
    </View>
    <View style={GlobalStyles.fila}>
      <Boton estilo={GlobalStyles.botonNumeros} label='7' onPress={() =>construirNumero('7')}></Boton>
      <Boton estilo={GlobalStyles.botonNumeros} label='8' onPress={() =>construirNumero('8')}></Boton>
      <Boton estilo={GlobalStyles.botonNumeros} label='9' onPress={() =>construirNumero('9')}></Boton>
      <Boton estilo={GlobalStyles.botonOperaciones} label='x' onPress={() => operacionCalcular(Operadores.multiplicar)}></Boton>
    </View>
    <View style={GlobalStyles.fila}>
      <Boton estilo={GlobalStyles.botonNumeros} label='4' onPress={() =>construirNumero('4')}></Boton>
      <Boton estilo={GlobalStyles.botonNumeros} label='5' onPress={() =>construirNumero('5')}></Boton>
      <Boton estilo={GlobalStyles.botonNumeros} label='6' onPress={() =>construirNumero('6')}></Boton>
      <Boton estilo={GlobalStyles.botonOperaciones} label='-' onPress={() => operacionCalcular(Operadores.restar)}></Boton>
    </View>
    <View style={GlobalStyles.fila}>
      <Boton estilo={GlobalStyles.botonNumeros} label='1' onPress={() =>construirNumero('1')}></Boton>
      <Boton estilo={GlobalStyles.botonNumeros} label='2' onPress={() =>construirNumero('2')}></Boton>
      <Boton estilo={GlobalStyles.botonNumeros} label='3' onPress={() =>construirNumero('3')}></Boton>
      <Boton estilo={GlobalStyles.botonOperaciones} label='+' onPress={() => operacionCalcular(Operadores.sumar)}></Boton>
    </View>
    <View style={GlobalStyles.fila}>
      <Boton estilo={GlobalStyles.boton0} label='0' onPress={() =>construirNumero('0')}></Boton>
      <Boton estilo={GlobalStyles.botonOtros} label='.' onPress={() =>construirNumero('.')}></Boton>
      <Boton estilo={GlobalStyles.botonOtros} label='=' onPress={resultado}></Boton>
    </View>
    </View>
  );
}