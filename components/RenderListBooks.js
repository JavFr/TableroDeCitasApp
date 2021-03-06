import React, {Component} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';

export default function RenderListBooks (props) {
    
    const renderAuthorItem = ({item, index}) => {
        return(
            <ListItem
                    key={index}
                    leftAvatar={item.image != ''? {source: {uri: baseUrl + item.image}} : {title: item.name[0]}}
                    title={item.name}
                    subtitle={item.author}
                    onPress={() => props.onPress({filter: 'book', key: item.id, name: item.name})}
                />
        ); 
    }

    return(
        <FlatList
                data={props.books}
                renderItem={renderAuthorItem}
                keyExtractor={item => item.id.toString()}
                />
    );
}