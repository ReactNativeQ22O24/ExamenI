import { View, TextInput, Image,Button } from 'react-native'
import React from 'react'
import styles from '../style/buscarRecetaCSS'

export default function listarReceta() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')}/>
      <View style={styles.divInpust}>
        <TextInput style={styles.entradaTexto} placeholder='N° Receta'/>
        <TextInput style={styles.entradaTexto} placeholder='Nombre'/>
        <TextInput style={styles.entradaTexto} placeholder='Ingredientes'/>
      </View>
      
      <View style={styles.viewBoton}>
        <Button title="VOLVER" color={'#E5AB45'}/>
        <Button title="ELIMINAR" color={'red'}/>
      </View>
    </View>
    
  )
}