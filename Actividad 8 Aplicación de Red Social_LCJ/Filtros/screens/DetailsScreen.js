import { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image, TextInput } from "react-native";
import api from '../config/api';
import { AuthContext } from "../context/AuthContext";


const perfil = { user: "Alex  ", email: "alex@gmail.com" }



const DetailsScreen = ({ route, navigation}) => {
  const { logout } = useContext(AuthContext);
  const { item, setPublicaciones } = route.params;

  const eliminarPublicacion = () =>{
    setPublicaciones((prev) => prev.filter((pub) => pub !== item));
    navigation.goBack();
  }

  return (
    <SafeAreaView>
      <ScrollView style={{ padding: 20 }}>

        <View style={styles.container}>
          <Text style={styles.title}>Detalles</Text>
          
        </View>

        <Text style={{marginTop: 30, fontSize: 15}}>Motivo: {item.reporte}</Text>
        <View style={styles.card}>
            <View style={styles.header}>
              <Image source={item.imgPerfil} style={styles.avatar} />
              <View style={styles.userInfo}>
                <Text style={styles.userName}>{item.persona}</Text>
                <Text style={styles.time}>{item.fecha}</Text>
              </View>
            </View>
            <Text style={styles.text}>{item.comentario}</Text>
            <Image source={item.publicacion} style={styles.image} />
            
          </View>

          <TouchableOpacity
              style={styles.logoutButton}
              onPress={eliminarPublicacion}
            >
              <Text style={{ color: 'white', width: "100%", textAlign: "center", fontSize: 15 }}>Eliminar publicacion</Text>
            </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: "10px" },
  input: { width: "70%", height: 40, borderWidth: 1, marginVertical: 10, padding: 8, backgroundColor: "#fff", borderRadius: 8, marginRight: 7 },
  logoutButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10
  },
  buttonRastrear: {
    justifyContent: "center",
    marginVertical: 10,
    backgroundColor: '#fffc37',
    height: 40,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 8,
    borderWidth: 1
  },
  card: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontWeight: "bold",
  },
  time: {
    color: "gray",
    fontSize: 12,
  },
  text: {
    fontSize: 14,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    padding: 10,
  },
});


export default DetailsScreen;