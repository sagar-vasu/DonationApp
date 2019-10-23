import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Main, Home, Mission, CashDonation, GoodsDonation, FoodDonation, LandDonation, CardDonation, Contact } from '../../Screens'
import { createStackNavigator } from 'react-navigation-stack';

import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';



const StackNavigator = createStackNavigator({
    Home: {
        screen: Home

    },
    Card: {
        screen: CardDonation,
    },
    Cash: {
        screen: CashDonation,
    },

    Goods: {
        screen: GoodsDonation,
    },
    Food: {
        screen: FoodDonation,
    },
    Land: {
        screen: LandDonation,
    },

});

const DrawerNavigator = createBottomTabNavigator({
    Home: {
        screen: StackNavigator,
        navigationOptions: {
            tabBarLabel: 'HOME',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="md-home" size={24} color={tintColor} />
            )
        }
    },
    Mission: {
        screen: Mission,
        navigationOptions: {
            tabBarLabel: 'MISSION',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="md-eye" size={24} color={tintColor} />
            )
        }
    },
    Contact: {
        screen: Contact,
        navigationOptions: {
            tabBarLabel: 'CONTACT',
            tabBarIcon: ({ tintColor }) => (
                <Ionicons name="md-pin" size={24} color={tintColor} />
            )
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: '#056839',
        inactiveTintColor: 'grey',
        style: {
            backgroundColor: 'white',
            borderTopWidth: 0,
            shadowOffset: { width: 5, height: 3 },
            shadowColor: 'black',
            shadowOpacity: 0.5,
            elevation: 5,

        }
    }
})


const AppNavigator = createSwitchNavigator({
    Main: {
        screen: Main,
    },
    Home: {
        screen: DrawerNavigator
    },

});



export default createAppContainer(AppNavigator)