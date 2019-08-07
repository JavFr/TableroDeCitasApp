import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import RenderListBooks from './RenderListBooks';
import { Loading } from './LoadingComponent';

const mapStateToProps = state => {
    return{
        books: state.books
    }
}

class Books extends Component {
    
    render(){
        if (this.props.books.isLoading) {
            return (<Loading />);
            
        }
        else if (this.props.books.errMess) {
            return (<View><Text>{this.props.books.errMess}</Text></View>);
        }
        else {
            return(
                <RenderListBooks books={this.props.books.books}/>
            );
        }
    }
}


export default connect(mapStateToProps)(Books);