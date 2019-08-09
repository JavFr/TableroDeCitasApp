//MODULES
import React, {Component} from 'react';
import { Modal, View, Text } from 'react-native';
import { Icon, Button } from 'react-native-elements';

//REDUX
import { connect } from 'react-redux';


export default class AuthorsModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            authorModal: false,
            bookModal: false,
            quoteModal: false
        };
    }
    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>AuthorsModal</Text>
            <Button
              onPress={() => this.props.navigation.goBack()}
              title="Dismiss"
            />
          </View>
        );
    }
}