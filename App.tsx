import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { Pantalla } from './src/components/Pantalla';
import { Boton } from './src/components/Boton';
import { useCalculadora } from './src/hooks/useCalculadora';
import { GlobalStyles } from './src/themes/GlobalStyles';


export default function App() {

  const {formula, numeroAnterior, construirNumero, clean, cambiarSigno, borrarDigito,
         operacionDividir, operacionMultiplicar, operacionRestar, operacionSumar,resultado  } = useCalculadora();

  return (
  
    <View style={styles.container}>    
      <Pantalla numberOfLines={1} estilo={GlobalStyles.pantallaPrincipal} adjustsFontSizeToFit >{formula}</Pantalla>

      {formula === numeroAnterior ? (
        <Pantalla estilo={GlobalStyles.pantallaSecundaria} numberOfLines={1} adjustsFontSizeToFit> </Pantalla>
      ) : (
        <Pantalla estilo={GlobalStyles.pantallaSecundaria} numberOfLines={1} adjustsFontSizeToFit>{numeroAnterior}</Pantalla>
      )}
      
     
      
      
      <StatusBar style="auto" />

    <View style={styles.fila}>
      <Boton estilo={GlobalStyles.botonOtros} label='C' width={80} onPress={clean}></Boton>
      <Boton estilo={GlobalStyles.botonOtros} label='+/-' width={80} onPress={cambiarSigno}></Boton>
      <Boton estilo={GlobalStyles.botonOtros} label='del' width={80} onPress={borrarDigito}></Boton>
      <Boton estilo={GlobalStyles.botonOperaciones} label='/' width={80} onPress={operacionDividir}></Boton>
    </View>
    <View style={styles.fila}>
      <Boton estilo={GlobalStyles.botonNumeros} label='7' width={80} onPress={() =>construirNumero('7')}></Boton>
      <Boton estilo={GlobalStyles.botonNumeros} label='8' width={80} onPress={() =>construirNumero('8')}></Boton>
      <Boton estilo={GlobalStyles.botonNumeros} label='9' width={80} onPress={() =>construirNumero('9')}></Boton>
      <Boton estilo={GlobalStyles.botonOperaciones} label='x' width={80} onPress={operacionMultiplicar}></Boton>
    </View>
    <View style={styles.fila}>
      <Boton estilo={GlobalStyles.botonNumeros} label='4' width={80} onPress={() =>construirNumero('4')}></Boton>
      <Boton estilo={GlobalStyles.botonNumeros} label='5' width={80} onPress={() =>construirNumero('5')}></Boton>
      <Boton estilo={GlobalStyles.botonNumeros} label='6' width={80} onPress={() =>construirNumero('6')}></Boton>
      <Boton estilo={GlobalStyles.botonOperaciones} label='-' width={80} onPress={operacionRestar}></Boton>
    </View>
    <View style={styles.fila}>
      <Boton estilo={GlobalStyles.botonNumeros} label='1' width={80} onPress={() =>construirNumero('1')}></Boton>
      <Boton estilo={GlobalStyles.botonNumeros} label='2' width={80} onPress={() =>construirNumero('2')}></Boton>
      <Boton estilo={GlobalStyles.botonNumeros} label='3' width={80} onPress={() =>construirNumero('3')}></Boton>
      <Boton estilo={GlobalStyles.botonOperaciones} label='+' width={80} onPress={operacionSumar}></Boton>
    </View>
    <View style={styles.fila}>
      <Boton estilo={GlobalStyles.botonNumeros} label='0' width={165} onPress={() =>construirNumero('0')}></Boton>
      <Boton estilo={GlobalStyles.botonOtros} label='.' width={80} onPress={() =>construirNumero('.')}></Boton>
      <Boton estilo={GlobalStyles.botonOtros} label='=' width={80} onPress={resultado}></Boton>
    </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:  'center',
    justifyContent: 'flex-end',
    paddingBottom:20,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: "space-around",
    marginBottom:16,
    paddingHorizontal:10,
    width: '100%',
  },
});
