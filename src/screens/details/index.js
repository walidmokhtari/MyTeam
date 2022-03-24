import React, {useContext, useState, useEffect} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import styled from 'styled-components';
import AuthContext from '../../configs/context';

const windowWidth = Dimensions.get('window').width;

const Details = (props) => {
    const {navigation} = props;
    const { CurrentPlayer, deleteFromTeamList, teamList} = useContext(AuthContext);
    const [isInTeamList, setIsInTeamList] = useState(false);

    const checkTeamList =  () => {
        teamList.map((item) => {
            if (item.id == props.route.params.player.id){
                setIsInTeamList(true);   
            }
        })
    }
    
    useEffect(() => {
        checkTeamList();
    },[])

    return (
        <>
            <Image 
                source={{uri: props.route.params.player.image}} 
            ></Image>
            <Text>Name : {props.route.params.player.firstName} {props.route.params.player.lastName}</Text>
            <Text>Club : {props.route.params.player.club}</Text>
            <Text>Goals (21/22): {props.route.params.player.goals}</Text>
            
            {
                isInTeamList ?
                    <Button title='delete' red onPress={() => {deleteFromTeamList(props.route.params.player.id)}}><TextHome>Delete</TextHome></Button>
                :
                    <Button title='buy'  onPress={() => {navigation.navigate('Paiament'); CurrentPlayer(props.route.params.player)}}><TextHome>Buy</TextHome></Button>
            }
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
    background-color: ${props => props.red ? 'red' : '#20bf6b'};
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