import { StyleSheet, StatusBar} from 'react-native'

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    alignItems:'center',
    borderRadius:5,
    height:600
  },
    item: {
      padding: 5,
      marginVertical: 3,
      marginHorizontal: 4,
      
    },
    nombre: {
      fontSize: 28,

    },
    desc: {
      fontSize: 10,
      
    },
    logo: {
      width: 80,
      height: 100,
      resizeMode: 'stretch'
    },
    viewBoton: {
      marginTop: 40,
      width: 300,
      textAlignVertical:'center',
      justifyContent: 'space-between',
      flexDirection: 'row'
    },
    entradaTexto: {
      color: 'green',
      fontSize: 20,
      padding: 15,
      width: 200,
      height: 40,
      borderRadius: 5,
      borderColor: 'green',
      borderWidth: 2,
      borderStyle: 'solid'
    }
  });
  

  export default styles;