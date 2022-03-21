import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/home';
import MyTeam from '../../screens/my_team';
import Settings from '../../screens/settings';
import Icon from 'react-native-vector-icons/Entypo';
import IconAnt from 'react-native-vector-icons/AntDesign';

const HomeStack = (props) => {

    const BottomStack = createBottomTabNavigator();
    
    return (
        <BottomStack.Navigator screenOptions={{headerShown: false} } >
            <BottomStack.Screen 
                name='Home' 
                component={Home}
                options={{
                    tabBarIcon: ({size, color}) => (<Icon name={"home"} color='#20bf6b' size={size} />)
                }}
                >
            </BottomStack.Screen>
            <BottomStack.Screen 
                name='My Team' 
                component={MyTeam}
                options={{
                    tabBarIcon: ({size, color}) => (<IconAnt name={"team"} color='#20bf6b' size={size} />)
                }}>   
            </BottomStack.Screen>
            <BottomStack.Screen 
                name='Settings' 
                component={Settings}
                options={{
                    tabBarIcon: ({size, color}) => (<IconAnt name={"setting"} color='#20bf6b' size={size} />)
                }}>   
            </BottomStack.Screen>
        </BottomStack.Navigator>
    );
}

export default HomeStack;