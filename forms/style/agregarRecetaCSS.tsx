import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#e5e1da',
      paddingTop: 10,
      alignItems:'center'
    },
    logo: {
      width: 120,
      height: 150,
      resizeMode: 'stretch'
    },
    entradaTexto: {
      color:'green',
      fontSize:20,
      marginTop:20,
      padding:15,
      width: 300,
      height: 50,
      borderRadius:5,
      borderColor:'green',
      borderWidth:2,
      borderStyle: 'solid'
    },
    divInpust:{
      marginTop:50,
      textAlign:'center'
    },
    h2: {
      marginTop:50,
      fontSize:28,
      color:'#E5AB45'
    },
    textosInformativos: {
      marginVertical:20,
      width: 400,
      height: 150
    },
    encabezadoTI:{
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    h2_texto:{
      backgroundColor:'#FFD48E',
      textAlign:'center',
      color:'green',
      width:200,
      height: 30,
      borderColor:'green',
      borderWidth: 1,
      borderStyle: 'solid'
    },
    h3_texto:{
      textAlign:'center',
      color:'green',
      width:200,
      height:120,
      borderColor:'green',
      borderWidth: 1,
      borderStyle: 'solid'
    },
    viewBoton:{
      marginTop:60,
      width:200,
      alignSelf:'flex-end',
      marginRight:20
    }
  });

  export default styles;