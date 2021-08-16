import React,{Fragment, useState} from 'react';
import {View,Text,SafeAreaView,Switch,TouchableOpacity, StatusBar, Image, TextInput} from 'react-native';
import style from './style';
import {useNavigation, useRoute} from '@react-navigation/native'


export default function LoginScreen(){

    const navigation = useNavigation();

    const {params} = useRoute();
  
   
    

    const [eMail, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isDarkMode, setIsDarkMode] = useState(false);
    const toogleSwitch = () => setIsDarkMode(previousState => !previousState);

    const imageUri = 'https://www.freepnglogos.com/uploads/besiktas-logo-png/besiktas-logo-history-png-6.png';

    const the = isDarkMode ? style.darkTheme : style.lightTheme;

    const GirisYap = () => {

        if(eMail === params?.mail?.myMail && password === params?.pw?.myPw){
          navigation.navigate('Home',{ e:{eMail}, s:{password}});
    

        }
        else{
          alert("Giriş başarısız")
        }
    
      };



    

    return(

        <Fragment>
        <StatusBar
            barStyle = {isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor = {isDarkMode ? 'black' : 'white'} 
        />

        <SafeAreaView style={[style.container, {backgroundColor:the.backgroundColor}]}>
            <View>
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

            <View style={{flexDirection:'row'}}>
                <TouchableOpacity
                style = {style.Button}
                onPress = {GirisYap}>
                <Text style = {style.ButtonText}>Giriş yap</Text>

                </TouchableOpacity>

                <View style= {style.switch}>

                    <Switch
                    value = {isDarkMode}
                    onChange = {toogleSwitch}>

                    </Switch>
                </View>
            </View>

            <View style={{margin:50}}>
                <TouchableOpacity
                style = {style.Button}
                onPress = {() => navigation.navigate('Register')}>
                <Text style = {style.ButtonText}>Kayıt OL</Text>

                </TouchableOpacity>

            </View>

           


        </SafeAreaView>

    

            
            
        </Fragment>

        
    

      

      

    );
}