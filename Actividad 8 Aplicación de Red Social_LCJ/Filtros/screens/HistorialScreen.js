import React from 'react';
import { ActivityIndicator, Image, View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import api from '../config/api';
import { AuthContext } from "../context/AuthContext";
import { useContext, useState, useEffect } from "react";

const perfil = { user: "Loreley Carrillo", email: "Loreleycj@gmail.com" }





const App = ({route}) => {
  const { logout } = useContext(AuthContext);

  const [personas, setPersonas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPersonas = async () => {
      try {
        const response = await api.get('/api/users?page=2');
        setPersonas(response.data.data);
    
      } catch (error) {
        console.error('Error fetching Personas:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPersonas();
  }, []);

  return (

    <View style={styles.container}>

      {loading ? (
        <ActivityIndicator size="large" color="#FF5733" />
      ) : (

        <View style={styles.container}>
          <Text style={styles.title}>Solicitudes</Text>


          <FlatList
            style={{ marginTop: 20, width: "80%" }}
            data={personas}
            keyExtractor={(item, index) => item.id}
            renderItem={({ item, index }) => (
              <View style={{ flexDirection: 'row', alignItems: 'center', margin: 30, backgroundColor: 'purple', width: 350, height: 100, borderRadius: 20 }}>
                <Image
                  style={{ width: 100, height: 100, borderRadius: 10, margin: 20 }}
                  source={{ uri: item.avatar }}
                />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{item.first_name} {item.last_name}</Text>

                  <View>
                    <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('Detalles', { item })}>
                      <Text style={{ color: 'white' }}>Ver perfil</Text>
                    </TouchableOpacity>
                  </View>
                </View>

              </View>
            )}
          />
        </View>

      )}


    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  text: { fontSize: 30, borderRadius: 10, padding: 10, margin: 10, justifyContent: 'center', alignItems: 'center' },
  card: {
    backgroundColor: "#fefdb8",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    borderWidth: 1,
  },
  titleCard: { fontSize: 16, fontWeight: 'bold' },
  title: { fontSize: 24, fontWeight: 'bold', marginHorizontal: 20, marginTop: 20 },
  primaryButton: {
    backgroundColor: 'feb8fc',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginRight: 10
  },
  logoutButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10
  }
});


export default App;