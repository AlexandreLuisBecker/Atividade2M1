import React from 'react'
import { SafeAreaView,
View,
Text,
Image,
StyleSheet,
TouchableOpacity
 } from 'react-native'


 import {MaterialIcons,Entypo} from '@expo/vector-icons';
 
 import CustomInput from '../../components/CustomInput'
 import CustomButtomLogin from '../../components/CustomButtonLogin';
 import CustomButtomBackTo from '../../components/CustomButtonBackTo'

 export default function PasswordScreen ({navigation}) {
    return(
        <SafeAreaView style={styles.SafeArea}>
            <View style={styles.ViewPassword}>

            <Image  style= {styles.ImagePassword}
            source={require("../../../assets/vscode.png")}
        />
        
            <Text style={styles.TextPassword}>
            Forgot Password?
            </Text>
            <Text style={styles.TextW}>No worries, we'll send you reset instructions
            </Text>
            <Text style={styles.TextInputs}>Enter your email
            </Text>
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

        <CustomButtomLogin
        style={styles.ButtomLogin}
                label={'Reset Password'}
                onPress={()=> navigation.navigate('Home')}
            />
        
    

            </View>
        <CustomButtomBackTo style={styles.ButtomLogin}
        label={'  Back to Login'}
                onPress={()=> navigation.navigate('Login')}
            />
        

                 
            <View style={styles.ViewRegister
            }>
                <Text style={styles.TextRegister} >Don't have account?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.TextRegister1} > Sign Up.</Text>
                </TouchableOpacity>
            </View>
        


        </SafeAreaView>

    )
 }
 const styles = StyleSheet.create({
    SafeArea:{
        backgroundColor:'#fff',
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
    },
    TextPassword:{
        textAlign: 'center',
        fontSize: 28,
        fontWeight:'500',
        color: '#000',
        marginBottom: 10,
        marginTop: 50
    },
    TextW:{
        textAlign:'center',
        marginBottom:50
        
    },
    ViewPassword:{
        backgroundColor:"#fff"

    },
    ViewRegister:{
        backgroundColor:"#fff",
        flexDirection: 'row',
        justifyContent:'center',
        marginBottom: 30,
        height:400
        
    },
    ButtomLogin:{
        alignItems:'center',
        justifyContent:'center',

    },
    TextInputs:{ 
        marginLeft: 15,
        fontSize:16
    },
    ImagePassword:{ 
        width:150,
        height:150,
        marginTop:100,
        alignSelf:'center'  
    },
    TextRegister:{
        alignItems:'center',
        fontSize:16,
        marginTop:15,
        color:"#ccc"
    },
    TextRegister1:{
        alignItems:'center',
        fontSize:16,
        marginTop:15
    }


 })