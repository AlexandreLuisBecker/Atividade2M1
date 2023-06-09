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

 export default function LoginScreen ({navigation}) {
    return(
        <SafeAreaView style={styles.SafeArea}>
            <View style={styles.ViewLogin}>

            <Image  style= {styles.ImageLogin}
            source={require("../../../assets/loginIcon.png")}
        />
        
            <Text style={styles.TextLogin}>
            Sign in to VsCode
            </Text>
            <Text style={styles.TextInputs}>Username or email address</Text>
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
                fieldButtonLabel={'Forgot your password?'}
                fieldButtonFunction={()=> navigation.navigate('Password')}

            />
    

        <CustomButtomLogin style={styles.ButtomLogin}
                label={'Sign In'}
                onPress={()=> navigation.navigate('Main')}
            />
            </View>

                 
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
    TextLogin:{
        textAlign: 'center',
        fontSize: 28,
        fontWeight:'500',
        color: '#000',
        marginBottom: 50,
        marginTop: 100 
    },
    ViewLogin:{
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
    ImageLogin:{ 
        width:70,
        height:70,
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