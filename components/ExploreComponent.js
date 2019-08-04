import React, {Component} from 'react';
import { View, FlatList, Text } from 'react-native';
import { Icon, ButtonGroup, Tile} from 'react-native-elements';

function BottomMenu (props) {
    const favorite = props.favorite;
    if (favorite) {
        var favoriteLogo = () => <Icon name="heart" type="font-awesome" />;
    }
    else {
        var favoriteLogo = () => <Icon name="heart-o" type="font-awesome" />;
    }

    return (
        <ButtonGroup 
            onPress={props.onPress}
            buttons={[
                {element: () => <Icon name="chevron-left" type="font-awesome" />},
                {element: () => <Icon name="info" type="font-awesome" />},
                {element: favoriteLogo},
                {element: () => <Icon name="search" type="font-awesome"/>},
                {element: () => <Icon name="chevron-right" type="font-awesome" />}
                ]}
            containerStyle={{height: 70, backgroundColor: 'powderblue', width: '100%', marginLeft: 0, marginBottom: 0}}
        />
    );
}

export default class Explore extends Component {

    render () {
        const categorias = [
            {id:0, name: 'Inspiración', color: 'red'},
            {id:1, name: 'Estoicismo', color: 'blue'},
            {id:2, name: 'Empatía'},
            {id:3, name: 'Ejercicio'},
            {id:4, name: 'Alegría'},
            {id:5, name: 'Malos Momentos'},
            {id:6, name: 'Naturaleza'},
        ];

        const renderMenuItem = ({item, index}) => {
            return(
                <View style={{width: '90%', height: 100, backgroundColor: 'blue', marginVertical: 10, alignSelf: "center", justifyContent: "center"}}>
                    <Text
                    key={index}
                    style={{color: 'white', fontSize: 22, textAlign: "center"}}
                    >{item.name}</Text>
                </View>
            );
        }
        return(
            <View style={{flex: 1, justifyContent: "center"}}>
                <FlatList
                    data={categorias}
                    renderItem={renderMenuItem}
                    keyExtractor={item => item.id.toString()}
                    style={{marginBottom: 0}}
                />
                <BottomMenu />
            </View>
        );
    }
}