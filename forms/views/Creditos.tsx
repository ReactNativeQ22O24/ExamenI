import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../style/creditosCSS'

export default function Home() {
  return (
    <View style={styles.container}>
       <Image style={styles.logo} source={require('../assets/logo.png')}/>
      <Text style={styles.textosInformativos}>La aplicación permite a los usuarios agregar recetas ver la lista de recetas disponibles, ver los detalles de una receta en especifica y eliminar recetas existentes.</Text>
      <Text style={styles.textosInformativos2} >Dueño de la Aplicacion:</Text>
      <Text style={styles.textosInformativos2}>Luis Cardona</Text>
    </View>
  )
}