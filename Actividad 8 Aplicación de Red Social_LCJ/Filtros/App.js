import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AuthProvider } from "./context/AuthContext";
import MainNavigator from "./navigation/AppNavigator";
import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import AdminHomeScreen from './screens/AdminHomeScreen';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      
      <AuthProvider>
        <MainNavigator />
        
      </AuthProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
});