import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import GenerarVentaScreen from '../screens/GenerarVentaScreen';
import CarritoScreen from '../screens/CarritoScreen';

import Colors from '../constants/Colors';

const defaultStackNavOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === 'android' ? 'white' : ''
	},
	headerTitleStyle: {
		//fontFamily: 'any'
	},
	headerBackTitleStyle: { //modify system default font on headers IOS
		//fontFamily: 'any'
	},
	headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
	headerTitle: 'ERROR 404: Missing screen (or title)'
};

const VentasNavigator = createStackNavigator({
	s1Generar: {
		screen: GenerarVentaScreen,
	},
	s2Carro: {
		screen: CarritoScreen
	}
}, {
	//initialRouteName: 'CarritoScreen', //changes default screen
	defaultNavigationOptions: defaultStackNavOptions
});

//stacknavigator works differently and needs an app wrapper
export default VentasNavigator;