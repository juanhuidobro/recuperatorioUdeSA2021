import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { db } from "../firebase/config";
import { static_posts } from "../data";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {
    db.collection("posts").orderBy("cratedAt", "desc").onSnapshot((docs) => {
      let postsAux = [];
      docs.forEach((doc) => {
        postsAux.push({
          id: doc.id,
          data: doc.data(),
        });
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Escribir el listado de posteos.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "white",
  },
  text: {
    color: "black",
    fontSize: 12,
    margin: 5,
    fontFamily: 'Montserrat',
    textAlign: 'center'
  },
});
