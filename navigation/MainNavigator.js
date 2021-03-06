import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import MenuPrincipalScreen from '../screens/MenuPrincipalScreen';
import InsumosScreen from '../screens/InsumosScreen';

import VentasNavigator from './VentasNavigator';
import InventarioNavigator from './InventarioNavigator';
import RegistroNavigator from './RegistroNavigator';

import Colors from '../constants/Colors';

const defaultNavOptions = {
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
	headerTitle: 'ERROR 404: Missing screen (or title)',
	header: null,
	headerStyle: {
		display: 'none'
	},
};

//using stack navigator so they also have a header
const MenuPrincipNav = createStackNavigator({
	MenuPrincip: MenuPrincipalScreen
}, {
	/* navigationOptions: { //this shows on drawer navigation
		drawerLabel: 'Filters!'
	}, */
	//defaultNavigationOptions: defaultStackNavOptions
});

//1st argument is an object where we configure the screens for
//	this drawer navigator. Docs:
//https://reactnavigation.org/docs/en/drawer-navigator.html
const MainNavigator = createDrawerNavigator({
	MenuPrincip: {
		screen: MenuPrincipNav,
		navigationOptions: {
			header: null,
			headerStyle: {
				display: 'none'
			},
			drawerLabel: 'Menu principal',
		}
	},
	GenerarVenta: {
		screen: VentasNavigator,
		navigationOptions: {
			drawerLabel: 'Generar venta'
		}
	},
	InventarioMenu: {
		screen: InventarioNavigator,
		navigationOptions: {
			header: null,
			headerStyle: {
				display: 'none'
			},
			drawerLabel: 'Inventario'
		}
	},
	Insumos: {
		screen: InsumosScreen,
		navigationOptions: {
			/* header: null,
			headerStyle: {
				display: 'none'
			}, */
			drawerLabel: 'Insumos'
		}
	},
	Registro: {
		screen: RegistroNavigator,
		navigationOptions: {
			drawerLabel: 'Registro'
		}
	}
}, {
	//initialRouteName: 'Registro', //changes default screen
	contentOptions: {
		activeTintColor: Colors.primaryColor
	}
});

//aparently drawerNav also needs this
export default MainNavigator;