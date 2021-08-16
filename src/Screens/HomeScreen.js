import React from 'react';
import {View,Text, SafeAreaView,TouchableOpacity} from 'react-native';
import style from './style';
import { useNavigation, useRoute} from '@react-navigation/native'



export default  function HomeScreen (){

    const navigation = useNavigation();

    const {params} = useRoute();



    return(

        <SafeAreaView style = {style.container}>
        
            <View style = {style.Text}>
                <View >
                    <Text>E-mail: {params?.e?.eMail}   </Text>
                </View>

                <View >
                    <Text>Password: {params?.s?.password} </Text>
                </View>

            </View>

            <View style ={style.Button}>
                <TouchableOpacity
                style = {{}}
                onPress = {() => navigation.navigate('Login')}>
                <Text style = {style.ButtonText}>Logine Dön</Text>

                </TouchableOpacity>

            </View>
            



        </SafeAreaView>

        

    );
}