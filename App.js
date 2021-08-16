import React from 'react';
import { Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './src/Screens/HomeScreen';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';



export default function App(){

  const Stack = createStackNavigator();

 


  return(
    <NavigationContainer>
      
      <Stack.Navigator initialRouteName='Login'
      screenOptions={{
        headerTitleAlign:'center',
          
        headerLeft: () =>{
          return (
            <Button 
          backgroundColor = 'red'
          title = "SOL"
          color = '#000000'
          onPress = {() => alert("Sol Butona Tıkladın")}
          ></Button>

          );
          
        },

        headerRight: () =>{
          return(
            <Button
          title = "SAĞ"
          color = '#000000'
          onPress = {() => alert("Sağ Butona Tıkladın")}
          ></Button>
          );
          
        }


        }} >

        <Stack.Screen component={LoginScreen} name='Login' options={{headerShown:false, gestureEnabled:false}}/>
        <Stack.Screen component={HomeScreen} name='Home' options={{title:'Ana Sayfa'}} />
        <Stack.Screen component={RegisterScreen} name='Register' options ={{headerShown:false}}/>
      </Stack.Navigator>

    </NavigationContainer>


  );
}