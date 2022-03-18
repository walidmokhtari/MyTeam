import React, {useState, useContext} from 'react';
import AuthContext from '../configs/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Dimensions } from 'react-native';
import styled from 'styled-components';
import Logo from '../img/logo.png';
import Users from '../configs/db/user';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Form = (props) => {
    const [user, setUser] = useState({});
    const { setLogged } = useContext(AuthContext);

    const setToken = async () => {
        await AsyncStorage.setItem("token","true");
    }
    
    const login = async () => {
        if(Users[0].email == user.username) {
            if(Users[0].password === user.password) {
                setLogged();
                setToken();
            }
            else
            {
                alert("INVALID PASSWORD");
            }
        }
        else
        {
            alert("INVALID EMAIL");
        }
    }


    return (
        <View>
            <ViewImage>
                <Image source={Logo}/>
            </ViewImage>
            <TextInput 
                email 
                placeholder="Username" 
                onChangeText={text => setUser({...user, username: text})}
            />
            <TextInput 
                placeholder="Password" 
                secureTextEntry={true}
                onChangeText={text => setUser({...user, password: text})}
            />
            <Button onPress={() => login()}><TextLogin>Login</TextLogin></Button>
        </View>
    );
}

const View = styled.View`
    margin-left: ${windowWidth - (windowWidth - 20)}px;
    margin-right: ${windowWidth - (windowWidth - 20)}px;
    margin-top: 80px;
`

const ViewImage = styled.View`
   align-items: center;
`

const Image = styled.Image`
    width: 160px;
    height: 80px;
    align-items: center;
`;

const TextInput = styled.TextInput`
    background-color: #dfe6e9;
    margin-top: 20px;
    border-radius: 5px;
`

const Button = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background-color:  #20bf6b;
    margin-top: 20px;
    border-radius: 5px;
    justify-content: center;
`

const TextLogin = styled.Text`
    color: white;
    text-align: center;
    font-size: 18px;
`

export default Form;