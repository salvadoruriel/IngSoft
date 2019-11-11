import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from '../screens/LoginScreen';

import MainNavigator from './MainNavigator';

import Colors from '../constants/Colors';

const defaultStackNavOptions = {
	header: null, //for some reason, this default works
	headerStyle: { //instead of working individually
		display: 'none' //wtf
	},
};

const AppNavigator = createStackNavigator({
	Login: {
		screen: LoginScreen,
		navigationOptions: {
			header: null,
			headerStyle: {
				display: 'none'
			},
			headerTitle: 'Admiss', //instead of placing in .js
		}
	},
	Ingreso: { 
		screen: MainNavigator ,
		/* doesnt work, clearly this is the work of an enemy stand
		header: null,
		headerStyle: {
			display: 'none'
		},
		headerTitle: 'hel' */
	}
}, {
	initialRouteName: 'Ingreso', //changes default screen
	defaultNavigationOptions: defaultStackNavOptions
});

//stacknavigator works differently and needs an app wrapper
export default createAppContainer(AppNavigator);