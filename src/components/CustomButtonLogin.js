import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';

export default function CustomButtomLogin({label, onPress}){
    return (
         <TouchableOpacity onPress={onPress} style={{alignItems: 'center'}}
         >
        <LinearGradient
 
        style={{
            alignItems: 'center',
            height: 45, 
	        width: 400, 
	        marginTop:30, 
	        borderRadius: 5,
            justifyContent:'center',
        
            }}
	colors={['#30a5e8','#6A2597']}>
      
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
    
</LinearGradient> 
  </TouchableOpacity>
      
    )
}