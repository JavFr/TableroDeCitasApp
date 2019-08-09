//MODULES
import React, {Component} from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { ListItem, Button, Icon } from 'react-native-elements';

//COMPONENTS
import  RenderListAuthors  from './RenderListAuthors';
import {Loading} from './LoadingComponent';
import { ToggleForms } from './ToggleFormsComponent';

//REDUX
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        authors: state.authors
      }
}

class Authors extends Component{

    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Autores'
    }

    render(){
        if (this.props.authors.isLoading) {
            return(<Loading />);
        }
        else if (this.props.authors.errMess) {
            return(<View><Text>{this.props.authors.errMess}</Text></View>);
        }
        else{
            return(
                <View style={{flex: 1}}>
                    <RenderListAuthors authors={this.props.authors.authors} onPress={(param) => this.props.navigation.navigate('Quotes', param)}/>
                    <ToggleForms onPress={(params) => this.props.navigation.navigate(params)}/>
                </View>
            ); 
        }
    }
    
}

export default connect(mapStateToProps)(Authors);