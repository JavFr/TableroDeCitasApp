import React, {Component} from 'react';
import { View, Text, ScrollView, SafeAreaView, DrawerItems, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { createStackNavigator, createMaterialTopTabNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Home from './HomeComponent';
import Explore from './ExploreComponent';

/////////// Navigation ////////////
const HomeNavigator = createStackNavigator(
    {
        Home: {
            screen: Home
        }    
    }
);
const ExploreNavigator = createStackNavigator(
    {
        Explore: {
            screen: Explore,
            navigationOptions: ({ navigation }) => ({
                //Common config for all the screens
                /*
                headerStyle: {
                    backgroundColor: '#512DA8'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    color: '#fff'
                },
                headerLeft: <Icon name='menu' size={24} color='white' onPress={() => navigation.toggleDrawer()}/>
                */
            })
        }
    }
);

const TabNavigator = createMaterialTopTabNavigator({
    Home: { 
        screen: Home,
        navigationOptions: {
            tabBarIcon: <Icon name="home" />
        }
    },
    Explore: { 
        screen: ExploreNavigator, 
        navigationOptions: {
            tabBarIcon: <Icon name="search" />
        }
    }
  }, {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    tabBarOptions: {tabStyle: {height: 60}},
    barStyle: { backgroundColor: '#694fad' }
  });
  
const MainContainer = createAppContainer(TabNavigator);

export default class Main extends Component {
    render () {
        return (
            <MainContainer style={{flex: 1}}/>
        );
    }
}

