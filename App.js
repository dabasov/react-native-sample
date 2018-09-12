import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createDrawerNavigator  } from 'react-navigation';
import { Main } from './Main'
import { DetailsScreen } from './DetailsScreen'

export default createDrawerNavigator({
        home: Main,
        details: DetailsScreen

    },
    {
        initialRouteName: 'home'
    }
);
