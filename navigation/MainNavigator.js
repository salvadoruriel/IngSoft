import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import MenuPrincipalScreen from '../screens/MenuPrincipalScreen';
import GenerarVentaScreen from '../screens/GenerarVentaScreen';
import InventarioScreen from '../screens/InventarioScreen';
import InsumosScreen from '../screens/InsumosScreen';
import RegistroVentasScreen from '../screens/RegistroVentasScreen';

import Colors from '../constants/Colors';

const defaultStackNavOptions = {
	headerStyle: {
		backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
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

//1st argument is an object where we configure the screens for
//	this drawer navigator. Docs:
//https://reactnavigation.org/docs/en/drawer-navigator.html
const MainNavigator = createDrawerNavigator({
	MenuPrincip: {
		screen: MenuPrincipalScreen,
		navigationOptions: {
			drawerLabel: 'Menu principal'
		}
	}
}, {
	contentOptions: {
		activeTintColor: Colors.primaryColor,
		/* labelStyle: {
		} */
	}
});

//aparently drawerNav also needs this
export default createAppContainer(MainNavigator);