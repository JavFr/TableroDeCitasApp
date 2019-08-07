import React, {Component} from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Icon, Avatar, SocialIcon, ButtonGroup, SearchBar } from 'react-native-elements';
import { baseUrl } from '../shared/baseUrl';


function RenderQuote(props) {
    return(
        <View style={Styles.quoteContainer}>
            <View style={{alignSelf: 'flex-start'}} >
                <Icon name='quote-left' type='font-awesome'/>
            </View>
            <View >
                <Text style={Styles.quoteText}>{props.quoteText}</Text>
            </View>
            <View style={{alignSelf: 'flex-end'}}>
                <Icon name='quote-right' type='font-awesome'/>
            </View>      
        </View>
    );
}

function RenderMeta (props) {
    return (
        <View style={Styles.metaDataContainer}>
            <Avatar rounded source={{uri: baseUrl + props.avatarSrc}} title={props.authorName? props.authorName[0] : ''} size="large"
            />
            <View style={{flex: 1, paddingHorizontal: 10, alignSelf: "center"}}>
                <Text style={Styles.authorName}>{props.authorName}</Text> 
            </View>       
        </View>
    );
}

export default function RenderFullQuote (props) {
    return (
        <ScrollView>
            <RenderQuote quoteText={props.quote.quote}/>
            <RenderMeta avatarSrc={props.quote.authorAvatar} authorName={props.quote.authorName} />
        </ScrollView>
    );
}





const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    quoteContainer: {
        paddingTop: 10,
        paddingHorizontal: 20
    },
    quoteText: {
        paddingHorizontal: 15,
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center"
    },
    authorName: {
        fontSize: 20
    },
    metaDataContainer: {
        marginTop: 10,
        flex: 1,
        flexDirection: "row",
        flexWrap: 'wrap',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between', 
        paddingHorizontal: 30
    }
});