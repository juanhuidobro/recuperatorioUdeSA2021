import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { db } from "../firebase/config";
import Post from "../components/Post";
import { FlatList } from "react-native-gesture-handler";



export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts:[]
    };
  }
  
  componentDidMount() {
    db.collection('publicaciones').onSnapshot((docs) => {
      let posteos = [];
      docs.forEach((doc) => {
        posteos.push({
          id: doc.id,
          data: doc.data(),
        });
      });
this.setState({
  posts: posteos,
})
    
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
        data={this.state.posts}
        keyExtractor={(post) => post.id}
        renderItem={({item}) => <Post postData={item}/>}
        />
        
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
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20,
    fontFamily: 'Montserrat',
    textAlign: 'center'
  },
});
