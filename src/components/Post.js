import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

export default function Post(){
  return (
    <View style={styles.container}>
      <Text>Pepe Perez</Text>
      <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/recuperatoriosudesa2021.appspot.com/o/fondo_de_pantalla_18_ventana.jpg?alt=media&token=547885e4-702d-49de-b794-270f5a26c015'}} />
      <Text>Lorem ipsum dolor sit amet.</Text>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F5E0",
    borderRadius: 15,
    padding: 10,
    marginBottom: "5%",
  },
  image: {
    height: 300,
    marginTop: "3%",
    marginBottom: "3%",
    padding: "%5",
    borderRadius: 15,
  },
  text: {
    color: "black",
    fontSize: 15,
    marginBottom: 5,
    fontFamily: "Montserrat",
    padding: "%5"
  }
});
