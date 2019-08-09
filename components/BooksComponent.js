//MODULES
import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

//COMPONENTS
import RenderListBooks from './RenderListBooks';
import { Loading } from './LoadingComponent';
import { ToggleForms } from './ToggleFormsComponent';

//REDUX
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return{
        books: state.books
    }
}

class Books extends Component {

    static navigationOptions = {
        title: 'Libros'
    }
    
    render(){
        if (this.props.books.isLoading) {
            return (<Loading />);
            
        }
        else if (this.props.books.errMess) {
            return (<View><Text>{this.props.books.errMess}</Text></View>);
        }
        else {
            return(
                <View style={{flex: 1}}>
                    <RenderListBooks books={this.props.books.books} onPress={(param) => this.props.navigation.navigate('Quotes', param)}/>
                    <ToggleForms onPress={(params) => this.props.navigation.navigate(params)}/>
                </View>
            );
        }
    }
}


export default connect(mapStateToProps)(Books);