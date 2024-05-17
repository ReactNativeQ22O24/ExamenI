import { View, TextInput, Image,Button, SafeAreaView, FlatList,TouchableOpacity, Text} from 'react-native'
import React , {useState} from 'react'
import styles from '../style/listaRecetasCSS'

type ItemData = {
  id: string;
  nombre: string;
  ingredientes:string;
};

const DATA: ItemData[] = 
[
  {
    id: "1",
    nombre: "Espagueti a la Carbonara",
    ingredientes: "Espagueti, Huevos, Panceta, Queso Pecorino, Queso Parmesano, Pimienta negra, Sal"
  },
  {
    id: "2",
    nombre: "Ensalada César",
    ingredientes: "Lechuga romana, Pechuga de pollo, Crutones, Queso Parmesano, Salsa César, Ajo, Aceite de oliva, Sal, Pimienta"
  },
  {
    id: "3",
    nombre: "Tacos de Carne Asada",
    ingredientes: "Tortillas de maíz, Carne de res, Cebolla, Cilantro, Limones, Aguacate, Salsa, Sal, Pimienta"
  },
  {
    id: "4",
    nombre: "Sopa de Tomate",
    ingredientes: "Tomates, Cebolla, Ajo, Caldo de vegetales, Aceite de oliva, Albahaca, Sal, Pimienta"
  },
  {
    id: "5",
    nombre: "Pizza Margarita",
    ingredientes: "Masa de pizza, Salsa de tomate, Queso Mozzarella, Albahaca fresca, Aceite de oliva, Sal"
  }
]


type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};

const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.nombre, {color: textColor}]}>{item.nombre}</Text>
    <View style={styles.viewBoton}>
      <Text style={[styles.desc, {color: textColor}]}>{item.ingredientes}</Text>  
      <Button title="Eliminar" color={'#094200'}/>
    </View>
  </TouchableOpacity>
);


const App = () => {
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({item}: {item: ItemData}) => {
    const backgroundColor = item.id == selectedId ? '#50724a' : '#FFD48E';
    const color = item.id == selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };


  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')}/>

      <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
      
      <View style={styles.viewBoton}>
      <TextInput style={styles.entradaTexto} placeholder='Ingrese N° Receta'/>
        <Button title="BUSCAR" color={'#E5AB45'}/>
      </View>
    </View>
    
  )
}

export default App;