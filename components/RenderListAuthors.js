import React, {Component} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';

export default function RenderListAuthors (props) {
    
    const renderAuthorItem = ({item, index}) => {
        return(
            <ListItem
                    key={index}
                    leftAvatar={item.image != ''? {source: {uri: baseUrl + item.image}} : {title: item.name[0]}}
                    title={item.name}
                    subtitle={item.country}
                    onPress={() => props.onPress({filter: 'author', key: item.id, name: item.name})}
                />
        ); 
    }

    return(
        <FlatList
                data={props.authors}
                renderItem={renderAuthorItem}
                keyExtractor={item => item.id.toString()}
                />
    );
}