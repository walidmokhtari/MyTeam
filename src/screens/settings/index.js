import React, {useContext} from 'react';
import styled from 'styled-components';
import AuthContext from '../../configs/context';

const Settings = (props) => {
    const { logout } = useContext(AuthContext);

    return (
        <Button onPress={() => logout()}><Text>Logout</Text></Button>
    );
}

const Button = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background-color:  #20bf6b;
    margin-top: 20px;
    border-radius: 5px;
    justify-content: center;
`

const Text = styled.Text`
    color: white;
    text-align: center;
    font-size: 18px;
`

export default Settings;