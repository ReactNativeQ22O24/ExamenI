import { View, Image, TextInput, Text, Button} from 'react-native'
import React from 'react'
import styles from '../style/agregarRecetaCSS'


export default function agregarReceta() {
  return (
    <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo.png')}/>
        <View style={styles.divInpust}>
            <TextInput style={styles.entradaTexto} placeholder='Nombre Receta'/>
            <TextInput style={styles.entradaTexto} placeholder='Ingredientes'/>
        </View>
        
        <Text style={styles.h2}>Detalle Receta Agregada</Text> 
        
        <View style={styles.textosInformativos}>
            <View style={styles.encabezadoTI}>
                <Text style={styles.h2_texto} >Nombre Receta</Text>
                <Text style={styles.h2_texto}>Detalles Ingredientes</Text>
            </View>
            <View style={styles.encabezadoTI}>
                <Text style={styles.h3_texto} ></Text>
                <Text style={styles.h3_texto}></Text>
            </View>
            
        </View>
        <View style={styles.viewBoton}>
            <Button title="AGREGAR RECETA" color={'#E5AB45'}/>
        </View>
        
    </View>
  )
}

