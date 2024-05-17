import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e1da',
    paddingTop: 10,
    alignItems: 'center'
  },
  logo: {
    marginTop:40,
    width: 120,
    height: 150,
    resizeMode: 'stretch'
  },
  entradaTexto: {
    color: 'green',
    fontSize: 20,
    marginTop: 20,
    padding: 15,
    width: 300,
    height: 50,
    borderRadius: 5,
    borderColor: 'green',
    borderWidth: 2,
    borderStyle: 'solid'
  },
  divInpust: {
    marginTop: 50,
    textAlign: 'center'
  },
  viewBoton: {
    marginTop: 60,
    width: 300,
    marginRight: 20,
    justifyContent: 'space-around',
    flexDirection: 'row',
  }
});

export default styles;