import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Icon, Avatar, SocialIcon, ButtonGroup, SearchBar } from 'react-native-elements';


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
            <Avatar rounded source={props.avatarSrc} title={props.authorText[0]} size="large"
            />
            <View style={{flex: 1, paddingHorizontal: 10, alignSelf: "center"}}>
                <Text style={Styles.authorText}>{props.authorText}</Text> 
            </View>       
        </View>
    );
}


export default class Quote extends Component {
    constructor(props){
        super(props);
    }
    render () {
        return(
            <View style={Styles.mainContainer}>
                    <RenderQuote quoteText={this.state.props.quote} />
                    <RenderMeta avatarSrc={this.state.props.authorAvatar}
                        authorText={this.state.props.author}
                        />     
            </View>
        );
    }
}


const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
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
    authorText: {
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
    },
    social: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center'
    }
});