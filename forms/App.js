import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import agregarReceta from './views/AgregarReceta.tsx';
import listarReceta from './views/ListarReceta.tsx';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name="Agregar Receta" component={agregarReceta} options={{tabBarIcon: (props)=>(<Ionicons name="add-circle-outline" size={24} color="green" />), headerShown:false}}/>
        <Tab.Screen name="Listar Recetas" component={listarReceta} options={{tabBarIcon: (props)=>(<Ionicons name="fast-food-outline" size={24} color="green" />), headerShown:false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
