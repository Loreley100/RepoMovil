import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserHomeScreen from "../screens/UserHomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { Feather } from "@expo/vector-icons";
import HistorialScreen from "../screens/HistorialScreen";

const Tab = createBottomTabNavigator();

const UserNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: true, headerTintColor: 'white',headerStyle:{backgroundColor:'purple',} } }>
    <Tab.Screen 
      name="Publicaciones" 
      component={UserHomeScreen} 
      options={{ tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} /> }} 
    />
    <Tab.Screen 
      name="Perfil" 
      component={ProfileScreen}
      options={{ tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} /> }} 
    />
    <Tab.Screen 
      name="Solicitudes" 
      component={HistorialScreen} 
      options={{ tabBarIcon: ({ color }) => <Feather name="align-justify" size={24} color={color} /> }} 
    />
  </Tab.Navigator>
);

export default UserNavigator;