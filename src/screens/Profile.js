import { Console } from "jest-util";
import React, { Component } from "react";
import { View, StyleSheet, Text } from 'react-native';
import { db } from '../firebase/config';

export default class Profile extends Component{
    
    constructor() {
        super();
        this.state = {
            profile: {}
        };
    }
    
    
    traerDatosDePerfil() {
        db.collection("profile").onSnapshot((docs) => {
            let datosPerfil = [];
            docs.forEach((doc) => {
                datosPerfil.push({
                    id: doc.id,
                    data: doc.data(),
                });
        });

            this.setState({
                profile: datosPerfil[0]
            })
           

        });
    }


    render(){
        console.log(this.state.profile);
        return(
            <View style={styles.container}>
                <Text>Renderizar los datos del usuario</Text>
                <Text>Fecha de nacimiento: ...</Text>
                <Text >Grupo sanguíneo: ...</Text>
                <Text >Cantidad de hermanos: ...</Text>
                <Text >Película favorita: ...</Text>
                <Text >Serie favorita: ...</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: "5%",
    },
  });