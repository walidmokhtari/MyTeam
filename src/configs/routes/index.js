import React, {useState, useEffect, useContext } from 'react';
import AuthContext from '../context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from '../../screens/login';
import Home from '../../screens/home';
import Details from '../../screens/details';
import MyTeam from '../../screens/my_team';
import HomeStack from './homeStack';

const Stack = createNativeStackNavigator();

const Routes = (props) => {
    const { isLogged } = useContext(AuthContext);

    return (    
        <NavigationContainer>
                {
                    isLogged ?
                        <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
                            <Stack.Screen  name='My TEAM' component={HomeStack}></Stack.Screen>
                            <Stack.Screen name='Details' component={Details}></Stack.Screen>
                        </Stack.Navigator>
                    :
                        <Stack.Navigator>
                            <Stack.Screen name='Login' component={Login}></Stack.Screen> 
                        </Stack.Navigator>
                }
        </NavigationContainer>     
     );
};

export default Routes;