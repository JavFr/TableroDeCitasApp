import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Icon, Avatar, SocialIcon, ButtonGroup } from 'react-native-elements';
import { QUOTES } from '../shared/quotes';

function RandomQuote(props){
    if (props.quotes != null) {
        const selectedQuote = props.quotes[Math.floor(Math.random()*props.quotes.length)];
        return(
            <View style={{flex: 1}}>
                <RenderQuote quote={selectedQuote} style={{flex: 1}}/>
            </View>   
        );
    }
    else {
        return (<View></View>);
    }
}

function RenderQuote(props) {
    if (props.quote != null) {

        const quote = props.quote.quote;
        
        return(
            <Card style={{flex: 1}}>
                <View style={{alignItems: 'center', flexDirection: 'column', flex: 5}}>
                    <View style={{flex: 1}}>
                        <Icon name='quote-left' type='font-awesome' style={{alignSelf: 'flex-start'}}/>
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={{textAlign: "justify"}}>{quote}</Text>
                    </View>
                    <View style={{flex: 1}}>
                    <Icon name='quote-right' type='font-awesome' style={{alignSelf: 'flex-end'}}/>
                    </View>      
                </View>
                <View style={{flex: 1}}>
                    <Text>{props.quote.author}</Text>    
                </View>                      
            </Card>
        );
        
    }
    else {
        return(<View></View>);
    }
    
}


export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            quotes: QUOTES,
            currentQuoteIndex: 0,
        }
        this.buttonsActions = this.buttonsActions.bind(this);
    }
    
    buttonsActions(selectedIndex) {
        if (selectedIndex == 3 && this.state.quotes[this.state.currentQuoteIndex+1] !== void 0) {
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
    render () {
        return(
            <View style={Styles.mainContainer}>
                    <View style={Styles.quoteContainer}>
                        <View style={{alignSelf: 'flex-start'}} >
                            <Icon name='quote-left' type='font-awesome'/>
                        </View>
                        <View >
                            <Text style={Styles.quoteText}>{this.state.quotes[this.state.currentQuoteIndex].quote}</Text>
                        </View>
                        <View style={{alignSelf: 'flex-end'}}>
                            <Icon name='quote-right' type='font-awesome'/>
                        </View>      
                    </View>
                    <View style={Styles.metaDataContainer}>
                        <Avatar rounded source={this.state.quotes[this.state.currentQuoteIndex].authorAvatar} size="large"/>
                        <View style={{flex: 1, paddingHorizontal: 10, alignSelf: "flex-start"}}>
                            <Text style={Styles.authorText}>{this.state.quotes[this.state.currentQuoteIndex].author}</Text> 
                        </View>       
                    </View>
                    
                    <View style={Styles.social}>
                        <SocialIcon type="facebook" />
                        <SocialIcon type="twitter" />
                        <SocialIcon type="instagram" />
                        <SocialIcon type="linkedin" />
                    </View>
                    <ButtonGroup 
                        onPress={this.buttonsActions}
                        buttons={[
                            {element: () => <Icon name="chevron-left" type="font-awesome" />},
                            {element: () => <Icon name="info" type="font-awesome" />},
                            {element: () => <Icon name="heart-o" type="font-awesome" />},
                            {element: () => <Icon name="chevron-right" type="font-awesome" />}
                        ]}
                        containerStyle={{height: 80, backgroundColor: 'powderblue', width: '100%', marginLeft: 0, marginBottom: 0}}
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