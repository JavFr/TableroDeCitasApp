import React, {Component} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';

import { AUTHORS } from '../shared/authors';

export default class Authors extends Component{

    constructor(props) {
        super(props);

        this.state = {
            authors: AUTHORS
        }
    }

    static navigationOptions = {
        title: 'Autores'
    }

    render(){
        const { navigate } = this.props.navigation;
        const renderAuthorItem = ({item, index}) => {
            return(
                <ListItem
                    key={index}
                    leftAvatar={item.image != ''? {source: item.image} : {title: item.name[0]}}
                    title={item.name}
                    subtitle={item.country}
                    onPress={() => navigate('Quotes', {authorFilter: item.name})}
                />
            );

        }
        return(
            <FlatList
                data={this.state.authors}
                renderItem={renderAuthorItem}
                keyExtractor={item => item.id.toString()}
                />
        );  
    }
    
}