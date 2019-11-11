import React, { useState } from 'react';
import {
	Text,
	View,
	Image,
	Button,
	Dimensions,
	StyleSheet,
	TextInput
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import Colors from '../constants/Colors';
import BotonDefault from '../components/BotonDefault';
import MyHeaderButton from '../components/MyHeaderButton';

const GenerarVentaScreen = props => {
	return (
		<View style={styles.screen}>
			<View style={styles.imageContainer}>
				<Image
					source={require('../assets/logo.png')}
					fadeDuration={600}
					style={styles.image}
					resizeMode="center"
				/>
			</View>
			<Text style={{ fontSize: 28 }}>Generar Venta</Text>
		</View>
	);
}


GenerarVentaScreen.navigationOptions = navData => {

	return {
		headerTitle: 'Generar Venta',
		headerLeft: (
			<HeaderButtons HeaderButtonComponent={MyHeaderButton}>
				<Item
					title='Menu'
					iconName='ios-menu'
					onPress={() => {
						navData.navigation.toggleDrawer();
					}}
				/>
			</HeaderButtons>
		),
		headerRight: (
			<HeaderButtons HeaderButtonComponent={MyHeaderButton}>
				<Item
					title='Cart'
					iconName='md-cart'
					onPress={() => {
						navData.navigation.navigate('s2Carro');
					}}
				/>
			</HeaderButtons>
		)
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingVertical: 10
	},
	imageContainer: {
		//width: '80%',
		width: Dimensions.get('window').width * 0.2,
		height: Dimensions.get('window').width * 0.2,
		borderRadius: Dimensions.get('window').width * 0.2 / 2,
		//height: 300, //on Android bordRadius is calculated as
		//borderRadius: 200, //an ellipse, thus needing tools
		borderWidth: 3, //to correctly pinpoint a circle
		borderColor: 'white', //across different devices
		overflow: 'hidden',
		marginBottom: 30,
		alignItems: 'center'
	},
	image: {
		width: '100%', //images from the web forcefully require
		height: '100%', //a width and height value
		//borderRadius: 200
	},
});

export default GenerarVentaScreen;