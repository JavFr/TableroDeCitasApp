import React, {Component} from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import  RenderListAuthors  from './RenderListAuthors';

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
                <RenderListAuthors authors={this.props.authors.authors} />
            ); 
        }
    }
    
}

export default connect(mapStateToProps)(Authors);