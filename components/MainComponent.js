//MODULES
import React, {Component} from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Icon, Image } from 'react-native-elements';
import { createStackNavigator,  createAppContainer, createDrawerNavigator, SafeAreaView, DrawerItems } from 'react-navigation';


//COMPONENTS
import Home from './HomeComponent';
import Authors from './AuthorsComponent';
import Quotes from './QuotesComponent';
import Books from './BooksComponent';
import Quote from './QuoteComponent';
import AuthorsModal from './AuthorsModalComponent';
import QuotesModal from './QuotesModalComponent';
import BooksModal from './BooksModalComponent';

//REDUX
import { connect } from 'react-redux';
import { fetchQuotes, fetchAuthors, fetchBooks } from '../TablerodeCitas-Redux/ActionCreators';




//REDUX TO PROPS
const mapStateToProps = state => {
    return {
      quotes: state.quotes,
      authors: state.authors,
      books: state.books
    }
  }

const mapDispatchToProps = dispatch => ({
  fetchQuotes: () => dispatch(fetchQuotes()),
  fetchAuthors: () => dispatch(fetchAuthors()),
  fetchBooks: () => dispatch(fetchBooks())
})

  

/////////////////       NAVIGATION              ///////////////////////////////

const HomeNavigator = createStackNavigator(
    {
        Home: {screen: Home,
            navigationOptions: ({ navigation }) => ({
                headerStyle: {
                    backgroundColor: '#512DA8'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                },
                headerLeftContainerStyle: {
                    paddingLeft: 20
                },
                headerLeft: <Icon name='menu' size={24} color='white'
                                onPress={() => navigation.toggleDrawer()}
                            />
            })}
    });
const BooksNavigator = createStackNavigator(
    {
        Books: {
            screen: Books,
            navigationOptions: ({ navigation }) => ({
                headerStyle: {
                    backgroundColor: '#512DA8'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                },
                headerLeftContainerStyle: {
                    paddingLeft: 20
                },
                headerLeft: <Icon name='menu' size={24} color='white'
                                onPress={() => navigation.toggleDrawer()}
                            />
            })
        },
        Quotes: {
            screen: Quotes,
            navigationOptions: ({ navigation }) => ({
                //Common config for all the screens
                headerStyle: {
                    backgroundColor: '#512DA8'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                },
                headerLeftContainerStyle: {
                    paddingLeft: 20
                },
                headerLeft: <Icon name='arrow-left' type="font-awesome" size={22} color='white'
                                onPress={() => navigation.navigate('Books')}
                            />
            })
        },
        Quote: {
            screen: Quote,
            navigationOptions: ({ navigation }) => ({
                //Common config for all the screens
                headerStyle: {
                    backgroundColor: '#512DA8'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                },
                headerLeftContainerStyle: {
                    paddingLeft: 20
                },
                headerLeft: <Icon name='arrow-left' type="font-awesome" size={22} color='white'
                                onPress={() => navigation.goBack()}
                            />
            })}       
    },
    {
        initialRouteName: 'Books'
    }
);
const QuotesNavigator = createStackNavigator(
    {
        Quotes: {
            screen: Quotes,
            navigationOptions: ({ navigation }) => ({
                //Common config for all the screens
                headerStyle: {
                    backgroundColor: '#512DA8'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                },
                headerLeftContainerStyle: {
                    paddingLeft: 20
                },
                headerLeft: <Icon name='menu' size={24} color='white'
                                onPress={() => navigation.toggleDrawer()}
                            />
            })
        },
        Quote: {
            screen: Quote,
            navigationOptions: ({ navigation }) => ({
                //Common config for all the screens
                headerStyle: {
                    backgroundColor: '#512DA8'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                },
                headerLeftContainerStyle: {
                    paddingLeft: 20
                },
                headerLeft: <Icon name='arrow-left' type="font-awesome" size={22} color='white'
                                onPress={() => navigation.navigate('Quotes')}
                            />
            })}

    },
    {
        initialRouteName: 'Quotes'
    }
);
const AuthorsNavigator = createStackNavigator(
    {
        Authors: {
            screen: Authors,
            navigationOptions: ({ navigation }) => ({
                headerStyle: {
                    backgroundColor: '#512DA8'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                },
                headerLeftContainerStyle: {
                    paddingLeft: 20
                },
                headerLeft: <Icon name='menu' size={24} color='white'
                                onPress={() => navigation.toggleDrawer()}
                            />
            })
        },
        Quotes: {
            screen: Quotes,
            navigationOptions: ({ navigation }) => ({
                //Common config for all the screens
                headerStyle: {
                    backgroundColor: '#512DA8'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                },
                headerLeftContainerStyle: {
                    paddingLeft: 20
                },
                headerLeft: <Icon name='arrow-left' type="font-awesome" size={22} color='white'
                                onPress={() => navigation.navigate('Authors')}
                            />
            })
        },
        Quote: {
            screen: Quote,
            navigationOptions: ({ navigation }) => ({
                //Common config for all the screens
                headerStyle: {
                    backgroundColor: '#512DA8'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                },
                headerLeftContainerStyle: {
                    paddingLeft: 20
                },
                headerLeft: <Icon name='arrow-left' type="font-awesome" size={22} color='white'
                                onPress={() => navigation.goBack()}
                            />
            })}
    }
);

const CustomDrawerContentComponent = (props) => (
    <ScrollView>
        <SafeAreaView style={styles.container}
            forceInset={{ top: 'always', horizontal: 'never'}}>
                <View style={styles.drawerHeader}>
                    <View style={{flex: 1}}>
                        <Image 
                            style={styles.drawerImage} />
                    </View>
                    <View style={{flex: 2}}>
                        <Text style={styles.drawerHeaderText}>
                            Tablero de Citas
                        </Text>
                    </View>
                </View>
                <DrawerItems {...props} />
        </SafeAreaView>
    </ScrollView>
);

const MainNavigator = createDrawerNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                title: 'Home',
                drawerLabel: 'Home',
                drawerIcon: ({ tintColor }) => (
                    <Icon 
                        name='home'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                        />
                )
            }
        },
        Quotes: {
            screen: QuotesNavigator,
            navigationOptions: {
                title: 'Citas',
                drawerLabel: 'Citas',
                drawerIcon: ({ tintColor }) => (
                    <Icon 
                        name='info'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                        />
                )
            }
        },
        Authors: {
            screen: AuthorsNavigator,
            navigationOptions: {
                title: 'Autores',
                drawerLabel: 'Autores',
                drawerIcon: ({ tintColor }) => (
                    <Icon 
                        name='list'
                        type='font-awesome'
                        size={24}
                        color={tintColor}
                        />
                )
            }
        },
        Books: {
            screen: BooksNavigator,
            navigationOptions: {
                title: 'Libros',
                drawerLabel: 'Libros',
                drawerIcon: ({ tintColor }) => (
                    <Icon 
                        name='address-card'
                        type='font-awesome'
                        size={22}
                        color={tintColor}
                        />
                )
            }
        }
    },
    {
        drawerBackgroundColor: '#D1C4E9',
        contentComponent: CustomDrawerContentComponent
    }
);

const RootStack = createStackNavigator(
    {
      Main: {
        screen: MainNavigator,
      },
      AuthorsModal: {
        screen: AuthorsModal,
      },
      BooksModal:{
          screen: BooksModal
      },
      QuotesModal: {
          screen: QuotesModal
      }
    },
    {
      mode: 'modal',
      headerMode: 'none',
    }
  );
  
const MainContainer = createAppContainer(RootStack);


///////////////             MAIN                /////////////////////


class Main extends Component {

    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchQuotes();
        this.props.fetchAuthors();
        this.props.fetchBooks();
      }

    render () {
        return (
            <MainContainer style={{flex: 1}}/>       
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);


/////////////////////// STYLES  ///////////////////////////////////

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    drawerHeader: {
        backgroundColor: '#512DA8',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        width: 80,
        height: 60
    }
});