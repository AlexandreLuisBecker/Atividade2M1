import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function CustomButtom({label, onPress}){
    return (
        <TouchableOpacity 
        onPress={onPress}
        style={{
            backgroundColor: '#25c2ed',
            padding: 20,
            borderRadius: 10,
            marginBottom: 30,
        }}>
        <Text
            style={{
                textAlign:'center',
                fontWeight: 700,
                fontSize: 18,
                color: '#fff'
            }}
        >

        {label}

        </Text>

        </TouchableOpacity>
    )
}