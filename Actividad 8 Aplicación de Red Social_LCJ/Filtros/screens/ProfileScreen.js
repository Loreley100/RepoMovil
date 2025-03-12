import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, FlatList, Image } from "react-native";
import { useContext, useEffect, useState } from "react";
import api from '../config/api';
import { AuthContext } from "../context/AuthContext";

const ProfileScreen = ({ navigation }) => {
  const [persona, setPersona] = useState({});
  const [loading, setLoading] = useState(true);
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await api.get('/api/users/2');
        setPersona(response.data.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching Persona', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  return (
   <SafeAreaView>
      <ScrollView style={{ padding: 20 }}>

        {loading ? (
          <ActivityIndicator size="large" color="#FF5733" />
        ) : (

          <View style={styles.container}>
            <Text style={styles.title}>Perfil</Text>
            <Image
              source={{ uri: persona.avatar }}
              style={{ width: 200, height: 200, marginBottom: "20px" }}
              borderRadius={100}
            />

            <Text style={styles.etiqueta}> Nombre: </Text>
            <Text style={styles.datoEtiqueta}>{persona.first_name}</Text>

            <Text style={styles.etiqueta}> Apellido: </Text>
            <Text style={styles.datoEtiqueta}>{persona.last_name}</Text>

            <Text style={styles.etiqueta}> Correo electronico: </Text>
            <Text style={styles.datoEtiqueta}>{persona.email}</Text>

            <TouchableOpacity
              style={styles.boton}
              onPress={logout}
            >
              <Text style={{ color: 'white', width: "100%", textAlign: "center", fontSize: 15 }}>Cerrar sesion</Text>
            </TouchableOpacity>

          </View>

        )}

      </ScrollView>
    </SafeAreaView>
  );
}





const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: "10px" },
  subtitle: { fontSize: 24, fontWeight: 'bold', marginBottom: "10px", paddingTop: "20px", width: "100%", textAlign: "center" },
  datoEtiqueta: { fontSize: 20, marginBottom: "30px", width: "100%", textAlign: "left" },
  etiqueta: { fontSize: 20, marginBottom: "5px", marginTop: 20, fontWeight: 'bold', width: "100%" },
  form: { marginHorizontal: 20, marginTop: 50 },
  boton: { marginHorizontal: 10, marginTop: 10, backgroundColor: "red", padding: 10, borderRadius: 5, color: "white" },
  checkbox: { alignSelf: 'center' }
});

export default ProfileScreen;
