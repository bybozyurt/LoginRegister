import React, { useState } from 'react';
import {View,Text, SafeAreaView,TouchableOpacity, TextInput, Image} from 'react-native';
import style from './style';
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function RegisterScreen(){

    const keyE = 'EmailKey';
    const keyP = 'PasswordKey';


    const [eMail, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const navigation = useNavigation();
    const imageUri = 'https://www.freepnglogos.com/uploads/besiktas-logo-png/besiktas-logo-history-png-6.png';


    const multiSet = async () =>{

        const keyS = [[keyE,eMail],[keyP,password]];



        try {
            await AsyncStorage.multiSet(keyS);
            console.log("Email Kayıt Edildi...");
            console.log("Password Kayıt Edildi...");

            getItem();

            
        } catch (error) {
            console.log("Multi set hata verdi", error);
            
        }


    };


    const getItem = async () => {

        try {
            const myMail = await AsyncStorage.getItem(keyE);
            const myPw = await AsyncStorage.getItem(keyP);

            navigation.navigate('Login',{mail:{myMail}, pw:{myPw}});


            
        } catch (error) {
            clg("GetItem hatası",error);
            
        }


    };



    return(

        <SafeAreaView style={style.container}>

            <View >
                <Image
                    source = {{uri: imageUri}}
                    style = {style.image}
                />
            </View>

            <View style={style.inputView}>
            <TextInput
                    onChangeText = {setEmail}
                    placeholder = 'E-mail'/>

            </View>

            <View style={style.inputView}>
            <TextInput
                    onChangeText = {setPassword}
                    placeholder = 'Password'
                    secureTextEntry = {true}                    
                    />
            </View>

            

            <View>
                <TouchableOpacity
                style={style.Button}
                onPress={multiSet}>
                    <Text style={style.ButtonText}>KAYDOL</Text>
                </TouchableOpacity>
            </View>



        </SafeAreaView>
        
    );
}