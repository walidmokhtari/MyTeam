import React, {useState, useEffect, useContext } from 'react';
import AuthContext from '../context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from '../../screens/login';
import Home from '../../screens/home';

const Stack = createNativeStackNavigator();

const Routes = (props) => {
    const { isLogged } = useContext(AuthContext);

    return (    
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
                {
                    isLogged ?
                        <Stack.Screen name='Home' component={Home}></Stack.Screen>
                    :
                        <Stack.Screen name='Login' component={Login}></Stack.Screen> 
                }
            </Stack.Navigator>
        </NavigationContainer>     
     );
};

export default Routes;