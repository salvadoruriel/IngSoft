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
			<Text style={{ fontSize: 20 }}>Generar Venta</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		//flexDirection: 'column',
		justifyContent: 'center',
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