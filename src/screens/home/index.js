import React from 'react';
import styled from 'styled-components';
import { FlatList } from 'react-native';
import Card from '../../components/card';
import Players from '../../configs/db/players';

const Home = (props) => {

    return (
        <View>
            <FlatList
                        data={Players}
                        renderItem={({item}) => (<Card player={item}/>)}
                        keyExtractor={(item) => item.id}
                        numColumns={2}
                        marginTop={20}
            />
        </View>
    );
}

const View = styled.View`

`

export default Home;