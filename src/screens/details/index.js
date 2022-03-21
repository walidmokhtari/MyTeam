import React, {useContext} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import styled from 'styled-components';
import AuthContext from '../../configs/context';

const windowWidth = Dimensions.get('window').width;

const Details = (props) => {
    const {navigation} = props;
    const { addPlayerToTeamList, teamList} = useContext(AuthContext);

    return (
        <>
            <Image 
                source={{uri: props.route.params.player.image}} 
            ></Image>
            <Text>Name : {props.route.params.player.firstName} {props.route.params.player.lastName}</Text>
            <Text>Club : {props.route.params.player.club}</Text>
            <Text>Goals (21/22): {props.route.params.player.goals}</Text>
            <Button title='buy'  onPress={() => addPlayerToTeamList(props.route.params.player)}><TextHome>Buy</TextHome></Button>
        </>
    );
}

const styles = StyleSheet.create({
    hearto: {
        color: '#d63031',
        fontSize: 25
    }

});

const Image = styled.Image`
    width: 100%;
    height: 400px;
`;

const Text = styled.Text`
    color: black;
    font-size: 16px;
    margin-left: ${windowWidth - (windowWidth - 10)}px;
`

const Button = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background-color: #20bf6b;
    margin-top: 20px;
    justify-content: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    
`

const TextHome = styled.Text`
    color: white;
    font-weight: bold;
    text-align: center;
    font-size: 18px;
`

export default Details;