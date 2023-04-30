import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import HomeScreen from '../screens/Home/HomeScreen'
import LoginScreen from "../screens/Login/LoginScreen";
import RegisterScreen from "../screens/Register/RegisterScreen";

const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}
        >
            <Stack.Screen name ="Home" component={HomeScreen} />
            <Stack.Screen name ="Login" component={LoginScreen} />
            <Stack.Screen name ="Register" component={RegisterScreen} />
      

        </Stack.Navigator>
    )
}

export default AuthStack