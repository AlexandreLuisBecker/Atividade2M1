import React from "react";
import { Text, TouchableOpacity } from "react-native";

import { LinearGradient } from 'expo-linear-gradient';

import {MaterialIcons,Entypo} from '@expo/vector-icons';

export default function CustomButtomBackTo({label, onPress}){
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
	colors={['#ccc','#30a5e8']}>
  
        <Text
            style={{
                textAlign:'center',
                fontWeight: 700,
                fontSize: 18,
                color: '#fff'
            }}
        >
           <MaterialIcons
                    name="west"
                    size={20}
                    color='#fff'
                    alignItems='center'
                />
   
        {label}

        </Text>
    
</LinearGradient> 
  </TouchableOpacity>
      
    )
}