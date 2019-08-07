import React, {Component} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import RenderListQuotes from './RenderListQuotes';
import {Loading} from './LoadingComponent';

const mapStateToProps = state => {
    return {
      quotes: state.quotes
    }
  }

class Quotes extends Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        title: 'Citas'
    }
    render(){
        
        const { navigate } = this.props.navigation;
        /*const authorFilter = this.props.navigation.getParam('authorFilter', '');
        if (authorFilter == '') {
            return(
                <View></View>
             );
        }*/
        if (this.props.quotes.isLoading) {
            return (<Loading />);
            
        }
        else if (this.props.quotes.errMess) {
            return (<View><Text>{this.props.quotes.errMess}</Text></View>);
        }
        else {
            return(
                <RenderListQuotes quotes={this.props.quotes.quotes} onPress={(param) => navigate('Quote', param)}/>
            );
        }
    }
}
    
export default connect(mapStateToProps)(Quotes);