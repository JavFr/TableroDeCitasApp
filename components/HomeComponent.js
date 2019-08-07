import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Icon, Avatar, SocialIcon, ButtonGroup, SearchBar } from 'react-native-elements';
import RenderFullQuote from './RenderQuoteComponent';
import {Loading} from './LoadingComponent';
//import  RenderFullQuote  from './RenderQuoteComponent';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
      quotes: state.quotes
    }
  }

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentQuoteIndex: 0
        }
    }

    static navigationOptions = {
        title: 'Citas del Día'
    };

    render () {
        if (this.props.quotes.isLoading) {
            return (<Loading />);
            
        }
        else if (this.props.quotes.errMess) {
            return (<View><Text>{this.props.quotes.errMess}</Text></View>);
        }
        else {
            return(<RenderFullQuote quote={this.props.quotes.quotes[0]}/>);
        }
    }
}

export default connect(mapStateToProps)(Home);