import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

import { db } from "../firebase/config";

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handlePost() {
    db.collection("publicaciones").add(

    )
    .then((response) => {
      console.log('creado')
      this.setState({
        descripcion: '',
        titulo: '',
      })
      this.props.navigation.navigate('Home')
    })
    .catch(() => {
      alert("Error en el posteo");
    });
  }

  render() {
    console.log(this.props.navigation);
    return (
      <React.Fragment>
        <View style={styles.container}>
           <TextInput 
           onChangeText={(text) => this.setState({ descripcion: text})}
           placeholder="Descripcion"
           keyboardType="default"
           />
           <TouchableOpacity
           style={styles.button}
           onPress={() => this.handlePost()}
           >
             <Text style= {styles.textButton}> Agrefar posteo</Text>
           </TouchableOpacity>

        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  field: {
    width: "90%",
    height: 100,
    backgroundColor: "#FAFAFA",
    borderRadius: 30,
    margin: 10,
    padding: 10,
    borderColor: "#CCD5AE",
    borderWidth: 0.1,
    fontFamily: "Montserrat",
  },
  button: {
    width: "40%",
    height: 45,
    backgroundColor: "#CCD5AE",
    borderRadius: 30,
    margin: 10,
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 18,
    margin: 10,
  },
  imagen: {
    height: 500,
    width: "90%",
    marginTop: "3%",
    marginBottom: "3%",
  },
});