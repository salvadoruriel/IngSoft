import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import RegistroScreen from '../screens/RegistroScreen';
import VerRegiScreen from '../screens/VerRegiScreen'; 
import AltaRegiScreen from '../screens/AltaRegiScreen';
import VentasScreen from '../screens/VentasScreen';
import RespaldarScreen from '../screens/RespaldarScreen';

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

const RegistroNavigator = createStackNavigator({
	s1MenuRegistro: {
		screen: RegistroScreen
	},
	s2VerRegistrados: {
		screen: VerRegiScreen
	},
	s3AltaRegistrados: {
		screen: AltaRegiScreen
	},
	s4Ventas: {
		screen: VentasScreen
	},
	s5Respaldar: {
		screen: RespaldarScreen
	}
}, {
	//initialRouteName: 's5Respaldar', //changes default screen
	defaultNavigationOptions: defaultStackNavOptions
});

//stacknavigator works differently and needs an app wrapper
export default RegistroNavigator;