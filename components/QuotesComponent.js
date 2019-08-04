import React, {Component} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import { QUOTES } from '../shared/quotes';

export default class Quotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: QUOTES
        }
    }
    static navigationOptions = {
        title: 'Citas'
    }
    render(){
        const { navigate } = this.props.navigation;
        const renderAuthorItem = ({item, index}) => {
            return(
                <ListItem
                    key={index}
                    leftAvatar={item.authorAvatar != ''? {source: item.authorAvatar} : {title: item.name[0]}}
                    title={item.quote.length <= 50? item.quote : item.quote.slice(0,50) + '...'} 
                    subtitle={item.author}
                    onPress={() => navigate('Home', {quoteId: item.id})}
                />
            );

        }
        return(
            <FlatList
                data={this.state.quotes}
                renderItem={renderAuthorItem}
                keyExtractor={item => item.id.toString()}
                />
        );  
    }
}
    
