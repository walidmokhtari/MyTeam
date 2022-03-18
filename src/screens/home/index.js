import React from 'react';
import styled from 'styled-components';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = (props) => {
    return (
        <View>
            <Text>THIS IS HOME PAGE</Text>
        </View>
    );
}

const View = styled.View`
    background-color: green;
`

const Text = styled.Text`
    color: white;
    text-align: center;
    font-size: 18px;
`

export default Home;