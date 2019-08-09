import React, {Component} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';

export default function RenderListQuotes (props) {
    
    const renderAuthorItem = ({item, index}) => {
        return(
            <ListItem
                key={index}
                leftAvatar={item.authorAvatar != ''? {source: {uri: baseUrl + item.authorAvatar}} : {title: item.authorName[0]}}
                title={item.quote.length <= 55? item.quote : item.quote.slice(0,55) + '...'} 
                subtitle={item.author}
                onPress={() => props.onPress({quoteId: item.id})}
            />
        );

    }

    return(
        <FlatList
                data={props.quotes}
                renderItem={renderAuthorItem}
                keyExtractor={item => item.id.toString()}
                />
    );
}