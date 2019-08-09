import React, {Component} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import RenderListQuotes from './RenderListQuotes';
import {Loading} from './LoadingComponent';
import Quote from './QuoteComponent';
import {ToggleForms} from './ToggleFormsComponent';

const mapStateToProps = state => {
    return {
      quotes: state.quotes,
      authors: state.authors
    }
  }

class Quotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: this.props.navigation.getParam('filter'),
            key: this.props.navigation.getParam('key')
        }
    }
    static navigationOptions = ({navigation}) => {
        const name = navigation.getParam('name');
        switch(navigation.getParam('filter')){
            case 'author':
                return {title: 'Citas de ' + name.includes(',')? name.slice(0,name.indexOf(',')) : name}
            
            case 'book':
                return {title: name}
            default:
                return {title: 'Citas'};
        }
    }
    render(){    
        if (this.props.quotes.isLoading) {
            return (<Loading />);      
        }
        else if (this.props.quotes.errMess) {
            return (<View><Text>{this.props.quotes.errMess}</Text></View>);
        }
        else {
            switch (this.state.filter){
                case 'author': 
                    return <RenderListQuotes quotes={this.props.quotes.quotes.filter((quote) => quote.authorId === this.state.key)} onPress={(param) => this.props.navigation.navigate('Quote', param)}/>
                case 'book':
                    return <RenderListQuotes quotes={this.props.quotes.quotes.filter((quote) => quote.bookId === this.state.key)} onPress={(param) => this.props.navigation.navigate('Quote', param)} />
                default: 
                    return <View style={{flex: 1}}><RenderListQuotes quotes={this.props.quotes.quotes} onPress={(param) => this.props.navigation.navigate('Quote', param)}/>
                    <ToggleForms onPress={(params) => this.props.navigation.navigate(params)}/></View>
                }
        }
    }
}

    
export default connect(mapStateToProps)(Quotes);