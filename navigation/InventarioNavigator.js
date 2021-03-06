import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';

import InventarioScreen from '../screens/InventarioScreen';
import ShowInventarioScreen from '../screens/ShowInventarioScreen';
import AltaScreen from '../screens/AltaScreen';
import ModificarScreen from '../screens/ModificarScreen';
import BajaScreen from '../screens/BajaScreen';

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

const InventarioNavigator = createStackNavigator({
	s1MenuInventario: {
		screen: InventarioScreen
	},
	s2VerInvent: {
		screen: ShowInventarioScreen
	},
	s3Alta: {
		screen: AltaScreen
	},
	s4Modificar: {
		screen: ModificarScreen
	},
	s5Baja: {
		screen: BajaScreen
	} 
}, {
	//initialRouteName: 's2Carro', //changes default screen
	defaultNavigationOptions: defaultStackNavOptions
});

//stacknavigator works differently and needs an app wrapper
export default InventarioNavigator;