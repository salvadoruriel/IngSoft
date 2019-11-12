import React, { useState } from 'react';
import {
	Text,
	View,
	Image,
	Dimensions,
	StyleSheet,
	ScrollView
} from 'react-native';

import Colors from '../constants/Colors';
import BotonDefault from '../components/BotonDefault';

const InventarioScreen = props => {
	return (
		<ScrollView>
			<View style={styles.screen}>
				<View style={styles.headerContainer}>
					<View style={styles.imageContainer}>
						<Image
							source={require('../assets/logo.png')}
							fadeDuration={600}
							style={styles.image}
							resizeMode="center"
						/>
					</View>
					<View style={{justifyContent: 'center', alignItems: 'center'}}>
						<Text style={{ fontSize: 18 }}>
							Usuario: Sa
						</Text>
					</View>
				</View>
				<View style={styles.botonContainer}>
					<View style={styles.botonContainer}>
						<BotonDefault
							onPress={() => props.navigation.navigate('s2VerInvent')}
							style={styles.botonNormal}
						>
							<Text>Mostrar Inventario</Text>
						</BotonDefault>
						<BotonDefault
							onPress={() => props.navigation.push()}
							style={styles.botonNormal}
						>
							<Text>Alta</Text>
						</BotonDefault>
						<BotonDefault
							onPress={() => props.navigation.push()}
							style={styles.botonNormal}
						>
							<Text>Baja</Text>
						</BotonDefault>
						<BotonDefault
							onPress={() => props.navigation.push()}
							style={styles.botonNormal}
						>
							<Text>Modificar</Text>
						</BotonDefault>
					</View>
				</View>
			</View>
		</ScrollView>
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
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	imageContainer: {
		//width: '80%',
		width: Dimensions.get('window').width * 0.25,
		height: Dimensions.get('window').width * 0.25,
		borderRadius: Dimensions.get('window').width * 0.25 / 2,
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
	botonContainer: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: Dimensions.get('window').width / 70
	},
	botonNormal: {
		paddingVertical: 15,
		paddingHorizontal: 55
	}
});

export default InventarioScreen;