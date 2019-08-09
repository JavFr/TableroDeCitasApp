//MODULES
import React, {Component} from 'react';
import { View, Text } from 'react-native';

//COMPONENTS
//import RenderQuoteComponent from './RenderQuoteComponent';
import RenderFullQuote from './RenderQuoteComponent';
import {Loading} from './LoadingComponent';

//REDUX
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
      quotes: state.quotes
    }
  } 

class Quote extends Component {
    constructor(props){
        super(props);
    }

    static navigationOptions = {
        title: 'Cita',
      };

    render () {
        if (this.props.quotes.isLoading) {
            return (<Loading />);
            
        }
        else if (this.props.quotes.errMess) {
            return (<View><Text>{this.props.quotes.errMess}</Text></View>);
        }
        else {
            return(
                <View style={{flex: 1}}>
                    <RenderFullQuote quote={this.props.quotes.quotes[this.props.navigation.getParam('quoteId')]}/>);
                    <ToggleForms onPress={(params) => this.props.navigation.navigate(params)}/>
                </View>
            );
        }
    }
}


export default connect(mapStateToProps)(Quote);