import React, { Component } from "react";
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from "react-native";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: ""
    };
  }

  onLogin() {
    if (this.state.email !== "" && this.state.password !== "") {
      this.props.handleLogin(this.state.email, this.state.password);
    }
    else {
      this.setState({
        error: "Por favor, complete los campos"
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.field}
          keyboardType="email-address"
          placeholder="Email"
          onChangeText={(text) => this.setState({ email: text })}
        />

        <TextInput
          style={styles.field}
          keyboardType="number-pad"
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => this.setState({ password: text })}
        />

        <Text style={styles.errorText}>{this.state.error}</Text>
        
        <TouchableOpacity style={this.state.password !== "" ? styles.button : styles.buttonDisabled} onPress={() => this.onLogin()}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity>        
      </View>
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
    width: "70%",
    height: 50,
    backgroundColor: "#FAFAFA",
    borderRadius: 30,
    margin: 10,
    padding: 10,
    borderColor: "#CCD5AE",
    borderWidth: 0.1,
  },
  button: {
    width: "40%",
    height: 45,
    backgroundColor: "#CCD5AE",
    borderRadius: 30,
    margin: 10,
    alignItems: "center",
    fontFamily: 'Montserrat'
  },
  buttonDisabled: {
    width: "40%",
    height: 45,
    backgroundColor: "#FAEDCD",
    borderRadius: 30,
    margin: 10,
    alignItems: "center",
    fontFamily: 'Montserrat'
  },
  text: {
    color: "black",
    fontSize: 18,
    margin: 10,
    fontFamily: 'Montserrat'
  },
  errorText: {
    margin: 15,
    fontFamily: 'Montserrat',
  },
  appLogo: {
    height: 100,
    width: 200,
    marginTop: 20,
    marginBottom: 20,
  },
});
