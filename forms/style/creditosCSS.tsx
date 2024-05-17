import { StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#e5e1da',
      paddingTop: 10,
      alignItems:'center'
    },
    
    logo: {
        marginTop: 60,
        width: 180,
        height: 200,
        resizeMode: 'stretch'
      },
    textosInformativos: {
        marginVertical:20,
        width: 390,
        fontSize: 20
    },
    textosInformativos2: {
        width: 390,
        fontSize: 29,
        color: 'green'
    }
})


export default styles;