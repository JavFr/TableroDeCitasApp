import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Icon, Avatar, SocialIcon, ButtonGroup, SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import RenderQuoteComponent from './RenderQuoteComponent';

const mapStateToProps = state => {
    return {
      quotes: state.quotes
    }
  }

class Quote extends Component {
    constructor(props){
        super(props);
    }
    render () {
        const quoteId = this.props.navigation.getParam('quoteId', '');
        return(
            <RenderQuoteComponent quote={this.props.quotes.quotes[quoteId]} />
        );
    }
}


export default connect(mapStateToProps)(Quote);