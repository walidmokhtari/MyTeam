import React, {useContext} from 'react';
import { FlatList} from 'react-native';
import AuthContext from '../../configs/context';
import Card from '../../components/card';

const MyTeam = (props) => {

    const { teamList} = useContext(AuthContext);
    console.log(teamList);

    return (
        <>
            <FlatList
                data={teamList}
                renderItem={({item}) => (<Card player={item} />)}
                keyExtractor={(item) => item.id}
                numColumns={2}
                marginTop={20}
            />
        </>
    );
}

export default MyTeam;