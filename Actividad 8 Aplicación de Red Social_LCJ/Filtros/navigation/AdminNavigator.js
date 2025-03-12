import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "../screens/SettingsScreen";
import { Feather } from "@expo/vector-icons";
import StackNavigator from "./StackNavigator";

const Tab = createBottomTabNavigator();

const AdminNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: true }}>
    <Tab.Screen 
      name="Reportes" 
      component={StackNavigator} //importanteeee
      options={{ tabBarIcon: ({ color }) => <Feather name="home" size={24} color={color} /> }} 
    />
    <Tab.Screen 
      name="Configuraciones" 
      component={SettingsScreen} 
      options={{ tabBarIcon: ({ color }) => <Feather name="settings" size={24} color={color} /> }} 
    />
  </Tab.Navigator>
);

export default AdminNavigator;