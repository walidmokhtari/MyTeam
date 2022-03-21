import { useNavigation } from '@react-navigation/native';
import {Dimensions} from 'react-native';
import React from 'react';
import styled from 'styled-components';

const windowWidth = Dimensions.get('window').width;

const Card = (props) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Details', {
            player: props.player
        })}>
            <View >
                <Image 
                    source={{uri: props.player.image}} 
                ></Image>
                <ViewBlack />
                <TextBold >{props.player.firstName} {props.player.lastName}</TextBold>
                <Text>{props.player.club}</Text>
                <Text>Goals (21/22): {props.player.goals}</Text>
            </View>
        </TouchableOpacity>
    );
}

const TouchableOpacity = styled.TouchableOpacity`
   width: 40%;
   height: 200px;
   align-items: center;
   justify-content: center;
   margin-left: ${windowWidth - (windowWidth - 27)}px;
   margin-bottom: 20px;
   border-bottom-right-radius: 30px;
   background-color: #20bf6b;
`

const View = styled.View`
   width: 100%;
   height: 200px;
`

const ViewBlack = styled.View`
   width: 100%;
   height: 5px;
   background-color: black;
`

const Image = styled.Image`
    width: 100%;
    height: 100px;
`;

const Text = styled.Text`
    color: white;
    font-size: 16px;
    text-align: center;
`

const TextBold = styled.Text`
    color: white;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
`

export default Card;