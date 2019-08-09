//MODULES
import React, {Component} from 'react';
import { View, Text } from 'react-native';

//COMPONENTS
import RenderFullQuote from './RenderQuoteComponent';
import {Loading} from './LoadingComponent';
import { ToggleForms } from './ToggleFormsComponent';

//REDUX
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
            return(
                <View style={{flex: 1}}>
                    <RenderFullQuote quote={this.props.quotes.quotes[0]}/>
                    <ToggleForms onPress={(params) => this.props.navigation.navigate(params)}/>
                </View>
                );
        }
    }
}

export default connect(mapStateToProps)(Home);