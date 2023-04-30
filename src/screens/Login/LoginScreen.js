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
             
                icon={
                    <Entypo
                        name='key'
                        size='20'
                        color='#91918d'
                        style={{marginRight:10}}

                    />
                }
                inputType='password'
                fieldButtonLabel={'Esqueceu sua senha?'}
                fieldButtonFunction={()=>{}}

            />
    

        <CustomButtomLogin style={styles.ButtomLogin}
                label={'Sign In'}
                onPress={()=> navigation.navigate('Home')}
            />
            </View>

                 
            <View style={styles.ViewRegister
            }>
                <Text style={styles.TextRegister} >New to VsCode?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.TextRegister} > Create an account.</Text>
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
        marginTop:15
    }

 })