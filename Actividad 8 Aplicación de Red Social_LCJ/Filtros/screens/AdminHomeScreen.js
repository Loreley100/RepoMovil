
import { FlatList, View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image, ActivityIndicator } from "react-native";
import { AuthContext } from "../context/AuthContext";

import { useContext, useState, useEffect } from "react";



const publi = [
  {  reporte: "Contenido malo", persona: "Josue", fecha: "07-03-2025", comentario: "Primer post", imgPerfil: require("../assets/perfilFoto.jpg"), publicacion: require("../assets/imgIconos.jpg") },
  { reporte: "Contenido falso", persona: "Juan",  fecha: "10-03-2025", comentario: "jajajaja %$#/&)%$?", imgPerfil: require("../assets/imgIconos.jpg"), publicacion: require("../assets/imgFondo.jpg") }
]

const AdminHomeScreen = ({ navigation }) => {
  const { logout } = useContext(AuthContext);

  const [publicaciones, setPublicaciones] = useState(publi)
  const [loading, setLoading] = useState(false);


  return (
    
    <View style={styles.container}>

    {loading ? (
      <ActivityIndicator size="large" color="#FF5733" />
    ) : (

      <View style={styles.container}>
          <Text style={styles.headerText}>Panel de Moderador</Text>
     


        <FlatList
          style={{ marginTop: 20, width: "80%" }}
          data={publicaciones}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item, index }) => (
            <View key={index} style={{ flexDirection: 'row', alignItems: 'center', margin: 30, backgroundColor: 'purple', width: 350, height: 100, borderRadius: 20, paddingHorizontal: 20 }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{item.reporte}</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}>{item.fecha}</Text>
                <View>
                  <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('Details', { item, setPublicaciones })}>
                    <Text style={{ color: 'white' }}>Ver Detalles</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Text style={{ color: 'white' }}>Cerrar Sesión</Text>
        </TouchableOpacity>
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
    backgroundColor: '#feb8fc',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginRight: 10
  },
  logoutButton: {
    backgroundColor: 'purple',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10
  }
});

export default AdminHomeScreen;