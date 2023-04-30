import React from 'react'
import { SafeAreaView,
View,
Text,
Image,
StyleSheet,
 } from 'react-native'
 import CustomButtomHome from '../../components/CustomButtonHome'




export default function HomeScreen ({navigation}) {
    return(
    <SafeAreaView style= {styles.SafeArea} >
        <View style={styles.View}>

        <Image  style= {styles.ImageHome}
            source={require("../../../assets/vsc.png")}
        />

    <Text style={styles.Text}>Bem Vindo!</Text>

    <CustomButtomHome style={styles.ButtomHome} 
        label={'Entrar'}
        onPress={()=>navigation.navigate('Login')}/>

        </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
 SafeArea:{ 
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#000',
    height: 900

 },
 View:{
    backgroundColor:'#000'
 },
 Text:{ 
    textAlign: 'center',
    color:'#fff',
    marginTop: 50,
    marginBottom: 50,
    textDecorationStyle:'dashed',
    fontSize: 20
    
 }, 
 ButtomHome:{

 },
 ImageHome:{ 
    width:100,
    height:100,
    marginTop: 10

 },

})