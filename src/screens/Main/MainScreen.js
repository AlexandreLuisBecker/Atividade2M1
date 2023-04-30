import React from 'react'
import { SafeAreaView,
View,
Text,
Image,
StyleSheet,
 } from 'react-native'
 import { LinearGradient } from 'expo-linear-gradient';
 import CustomButtomBackTo from '../../components/CustomButtonBackTo';

export default function MainScreen ({navigation}){
    return(
        <SafeAreaView style={styles.SafeArea}>
          <LinearGradient
colors={['#fff','#30a5e8','#fff']}>

            <View style={styles.ViewTop}>
                <Text style={styles.TextTop}>Visual Studio Code</Text>
            </View>
</LinearGradient>
       
        <Image  style= {styles.ImageMain}
            source={require("../../../assets/react.png")}
        />
    <Text style={styles.TextTitle}> Crie aplicativos nativos para Android, iOS e muito mais usando o React</Text>
    <Text style={styles.TextCont}> O React Native combina as melhores partes do desenvolvimento nativo com o React, a melhor biblioteca JavaScript da categoria para criar interfaces de usuário.</Text>
    <Text></Text>
    <Text style={styles.TextCont}> Use um pouco - ou muito . Você pode usar o React Native hoje em seus projetos Android e iOS existentes ou pode criar um aplicativo totalmente novo do zero.</Text>

    <Text style={styles.TextTitle}> Escrito em JavaScript — renderizado com código nativo</Text>

    <Text style={styles.TextCont}> As primitivas do React são renderizadas para a interface do usuário da plataforma nativa, o que significa que seu aplicativo usa as mesmas APIs de plataforma nativa que outros aplicativos usam.</Text>

    <CustomButtomBackTo style={styles.ButtomBackTo}
                onPress={()=> navigation.navigate('Home')}
            />

        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    SafeArea:{
        backgroundColor:'#fff',
     
    },
    ViewTop:{
        justifyContent:'center',
        alignItems:'center',
        width:420,
        height:70,
        marginTop:0
    },
  
    TextTop:{ 
        textAlign:'center',
        color:"#fff",
        fontSize:19,
        marginBottom:10,
        fontWeight: 600
    },
    ImageMain:{
        width: 420,
        height: 200,
    },
    TextTitle:{
        textAlign:'center',
        color:"#000",
        fontSize:19,
        marginTop:10,
        padding: 10,
        fontWeight: 600
    },
    TextCont:{
        textAlign:'left',
        fontSize:16,
        marginLeft:10,
        marginRight:10
    },
  
})
