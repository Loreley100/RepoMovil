import { View, Text, StyleSheet } from "react-native";
import React from 'react';
const DetailsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>⚙️ configuracion</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 24, fontWeight: "bold" },
});

export default DetailsScreen;
