import React from 'react';
import  { useContext, useEffect, useState } from "react";
import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, FlatList, Image } from "react-native";
import { AuthContext } from "../context/AuthContext";

import PropTypes from 'prop-types';

const publicaciones = [
  { persona: "Lore", fecha: "07-03-2025", comentario: "Primer post", imgPerfil: require("../assets/perfilFoto.jpg"), publicacion: require("../assets/imgIconos.jpg") },
  { persona: "Alex", fecha: "10-03-2025", comentario: "jajajaja %$#/&)%$?", imgPerfil: require("../assets/imgIconos.jpg"), publicacion: require("../assets/imgFondo.jpg") }
]




const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const UserHomeScreen = (navigation) => {
 
  return (
    <SafeAreaView>
        <ScrollView style={{ padding: 20 }}>

            <View style={styles.container}>

                <FlatList
                    data={publicaciones}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (

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
                            <View style={styles.actions}>
                                <TouchableOpacity style={styles.button}><Text>👍</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.button}><Text>💬</Text></TouchableOpacity>
                                <TouchableOpacity style={styles.button}><Text>🔗</Text></TouchableOpacity>
                            </View>
                        </View>

                    )}
                />


            </View>

        </ScrollView>
    </SafeAreaView>
);
  
};
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20, 
  },
  titulo: {
    fontSize: 32,
    textAlign: 'center',
    color: 'black',
  },
});

Item.propTypes = {
  title: PropTypes.string.isRequired,
};
*/


const styles = StyleSheet.create({
  container: { flex: 1, },
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

export default UserHomeScreen;