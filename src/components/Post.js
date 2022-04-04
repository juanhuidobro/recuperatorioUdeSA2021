import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
} from "react-native";

import firebase from "firebase";
import { auth, db } from "../firebase/config";

export default function Post(){
  return (
    <View style={styles.container}>
      <Text>Usuario: Pepe Perez</Text>
      <Image 
        source={{uri: 'https://firebasestorage.googleapis.com/v0/b/recuperatoriosudesa2021.appspot.com/o/fondo_de_pantalla_18_ventana.jpg?alt=media&token=547885e4-702d-49de-b794-270f5a26c015'}}
        resizeMode="contain" />
      <Text>Lorem ipsum dolor sit amet.</Text>
    </View>
  );
  
}

//

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F5E0",
    borderRadius: 15,
    padding: 10,
    marginBottom: 20,
  },
  image: {
    height: 300,
    marginTop: 10,
    marginBottom: 10,
    padding: 20,
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
