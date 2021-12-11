import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { db } from '../firebase/config';

export default function Profile(){
    
    const profileInfo = () => {
        db.collection("profile").where('', '', '').onSnapshot((docs) => {
        
        });
    }

    return(
        <View style={styles.container}>
            <Text>Escribir el perfil del usuario</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: "5%",
    },
  });