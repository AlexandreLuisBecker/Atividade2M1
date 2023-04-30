import React, {useState} from "react";
import { SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import {MaterialIcons,Entypo} from '@expo/vector-icons';

   import CustomInput from '../../components/CustomInput'
   import CustomButtomRegister from "../../components/CustomButtonRegister";

 export default function RegisterScreen ({navigation}) {
    return(
      <SafeAreaView style={styles.SafeArea}>
        <Image  style= {styles.ImageRegister}
            source={require("../../../assets/vscode.png")}
        />
      <Text style={styles.TextRegister}>Create your Account</Text>
   
      <Text style={styles.TextInputs}>Name</Text>
      <CustomInput
         label={'Alexandre Luis Becker'}
            icon={
               <MaterialIcons 
                  name='person'
                  size={20}
                  color='#91918d'
                  style={{marginRight:10}}

               />
            }
            keybordType="email-address"
         
            />
   <Text style={styles.TextInputs}>E-Mail</Text>
      <CustomInput
      label={'Uname@mail.com'}
            icon={
            <MaterialIcons
                  name='alternate-email'
                  size={20}
                  color='#91918d'
                  style={{marginRight:10}}
               />
            }
            keybordType="email-address"
         
            />
            <Text style={styles.TextInputs}>Password</Text>
   <CustomInput
               label={'Password'}
               icon={
                  <Entypo
                        name='key'
                        size='20'
                        color='#91918d'
                        style={{marginRight:10}}
                  />
               }
               inputType='password'
      />
      <Text style={styles.TextInputs}>Confirm Password</Text>
   <CustomInput
               label={'Confirm your password'}
               icon={
                  <Entypo
                        name='key'
                        size='20'
                        color='#91918d'
                        style={{marginRight:10}}

                  />
               }
               inputType='password'
            />
 <CustomButtomRegister style={styles.ButtomLogin}
                label={'Create'}
                onPress={()=> navigation.navigate('Login')}
            />
             <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.TextSign} > Sign in instead</Text>
                </TouchableOpacity>

      </SafeAreaView>
)
      
   
} 



const styles = StyleSheet.create({
   SafeArea:{
       backgroundColor:'#fff',
       height: 1000

   },
   TextRegister:{
      textAlign: 'center',
      fontSize: 28,
      fontWeight:'500',
      color: '#000',
      marginBottom: 60,
      marginTop: 30 
      
   },
   TextInputs:{ 
      marginLeft: 15,
      fontSize:16
  },
  TextSign:{ 
   marginLeft: 15,
   marginTop:20,
   fontSize:16
},
  ImageRegister:{ 
   width:100,
   height:100,
   marginTop:30,
   alignSelf:'center'  
},

})