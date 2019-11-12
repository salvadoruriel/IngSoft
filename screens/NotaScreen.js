import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
	Text,
	View,
	Dimensions,
	StyleSheet,
	FlatList,
	Image
} from 'react-native';

import { PALETAS, AGUAS } from '../data/productos';

import Colors from '../constants/Colors';
import BotonDefault from '../components/BotonDefault';

const renderProductItem = (itemData) => {
	console.log('N-render:');
	console.log(itemData);
	let actualItem =
		[...PALETAS.filter(pale => pale.id.includes(itemData.item.id)),
		...AGUAS.filter(pale => pale.id.includes(itemData.item.id))]
	actualItem = actualItem[0];
	
	let total = parseInt(itemData.item.cantidad)
		* parseInt(actualItem.precio);

	return (
		<View style={{
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'space-between',
			overflow: 'hidden'
		}}>
			<View style={styles.items}>
				<Text>{itemData.item.cantidad}</Text>
				<Text>{actualItem.id}</Text>
				<Text>${actualItem.precio}</Text>
				<Text>${total}</Text>
			</View>
		</View>
	);
};

const NotaScreen = props => {

	let allItems = props.navigation.getParam('cartItems');

	const totalValue = useCallback(() => {
		let total = 0;
		console.log('N--total: ');

		for (const itemData of allItems) {
			console.log(itemData);
			let actualItem =
				[...PALETAS.filter(pale => pale.id.includes(itemData.id)),
				...AGUAS.filter(pale => pale.id.includes(itemData.id))]
			actualItem = actualItem[0];

			let temp = parseInt(itemData.cantidad)
				* parseInt(actualItem.precio);
			//console.log(total + ' ' + temp);
			total += temp;
			console.log(total + ' ' + temp);
		}

		return total;
	});

	console.log('Nota: ');
	console.log(allItems);
	return (
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
				<Text style={{ fontSize: 18 }}>
					La Michoacana {'\n'}
					Calle Benito #350{'\n'}
					RFC:80085JEJE{'\n'}
					"Fria excelencia"
				</Text>
			</View>
			<View style={styles.items}>
				<Text>Cantidad</Text>
				<Text>ID</Text>
				<Text>Precio</Text>
				<Text>Total</Text>
			</View>
			<View style={styles.listContainer}>
				<FlatList
					data={allItems}
					keyExtractor={(item, index) => item.id}
					renderItem={renderProductItem}
					style={{ width: '100%', flexGrow: 1 }}
				/>
			</View>
			<View style={styles.items}>
				<Text>Total:</Text>
				<Text>${totalValue()}</Text>
			</View>
			<View style={styles.buttonContainer}>
				<BotonDefault
					style={{
						backgroundColor: 'blue',
						paddingHorizontal: 45
					}}
					onPress={() => {
						props.navigation.popToTop()
					}}
				>
					<Text>Imprimir</Text>
				</BotonDefault>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		//flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingVertical: 10
	},
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	imageContainer: {
		//width: '80%',
		width: Dimensions.get('window').width * 0.3,
		height: Dimensions.get('window').width * 0.3,
		borderRadius: Dimensions.get('window').width * 0.3 / 2,
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
	},
	items: {
		flexDirection: 'row',
		borderColor: '#ccc',
		//borderWidth: 1,
		borderBottomWidth: 1,
		padding: 10,
		marginVertical: 1,
		backgroundColor: 'white',
		justifyContent: 'space-between',
		width: '95%'
	},
	listContainer: {
		flex: 1,
		width: '95%',
		height: Dimensions.get('window').height * 0.6,
		alignItems: 'center'
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'center',
		paddingHorizontal: 15,
		paddingVertical: 10
	},
});

export default NotaScreen;