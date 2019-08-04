import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Icon, Avatar, SocialIcon, ButtonGroup, SearchBar } from 'react-native-elements';
import { QUOTES } from '../shared/quotes';

function SocialButtons () {
    return(
        <View style={Styles.social}>
            <SocialIcon type="facebook" />
            <SocialIcon type="twitter" />
            <SocialIcon type="instagram" />
            <SocialIcon type="linkedin" />
        </View>
    );
}

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


export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            quotes: QUOTES,
            currentQuoteIndex: this.props.navigation.getParam('quoteId', '')? this.props.navigation.getParam('quoteId', '') : 0,
        }
        this.buttonsActions = this.buttonsActions.bind(this);
        this.changeCurrentQuoteIndex = this.changeCurrentQuoteIndex.bind(this);
    }

    static navigationOptions = {
        title: 'Citas Aleatorias'
    };
    
    buttonsActions(selectedIndex) {
        if (selectedIndex == 4 && this.state.quotes[this.state.currentQuoteIndex+1] !== void 0) {
            this.setState({
                currentQuoteIndex: this.state.currentQuoteIndex + 1
            });
        }
        if (selectedIndex == 0 && this.state.currentQuoteIndex > 0) {
            this.setState({
                currentQuoteIndex: this.state.currentQuoteIndex - 1
            });
        }
    }
    changeCurrentQuoteIndex(quotedId) {
        this.setState({
            currentQuoteIndex: quotedId
        });
    }
    render () {
        
        return(
            <View style={Styles.mainContainer}>
                    <RenderQuote quoteText={this.state.quotes[this.state.currentQuoteIndex].quote} />
                    <RenderMeta avatarSrc={this.state.quotes[this.state.currentQuoteIndex].authorAvatar}
                        authorText={this.state.quotes[this.state.currentQuoteIndex].author}
                        />
                    <SocialButtons />
                    <BottomMenu onPress={this.buttonsActions} favorite={this.state.quotes[this.state.currentQuoteIndex].favorite}/>        
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