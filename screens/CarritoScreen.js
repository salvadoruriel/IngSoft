import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
	Text,
	View,
	Dimensions,
	StyleSheet,
	FlatList
} from 'react-native';

import { PALETAS, AGUAS } from '../data/productos';

import Colors from '../constants/Colors';
import BotonDefault from '../components/BotonDefault';

const renderProductItem = (itemData) => {
	console.log('-render:');
	console.log(itemData);
	let actualItem =
		[...PALETAS.filter(pale => pale.id.includes(itemData.item.id)),
		...AGUAS.filter(pale => pale.id.includes(itemData.item.id))]
	actualItem = actualItem[0];
	let producto;
	switch (itemData.item.id.charAt(0)) {
		case 'p':
			producto = 'Paleta de ';
			break;
		case 'a':
			producto = 'Agua de ';
			break;
		case 'n':
			producto = 'Nieve de ';
			break;
		default:
			producto = 'E404 ';
			break;
	}

	return (
		<View style={{
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'space-between',
			overflow: 'hidden'
		}}>
			<View style={styles.items}>
				<Text>{producto} {actualItem.sabor}{' '}({actualItem.tipo})</Text>
				<Text>{itemData.item.cantidad}</Text>
				<Text>${actualItem.precio}</Text>
			</View>
		</View>
	);
};

const CarritoScreen = props => {

	let allItems = props.navigation.getParam('cartItems');

	const totalValue = useCallback(() => {
		let total = 0;
		console.log('--total: ');

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

	console.log('carrito: ');
	console.log(allItems);
	return (
		<View style={styles.screen}>
			<Text style={{ fontSize: 28 }}>Carrito</Text>
			<View style={styles.items}>
				<Text>Producto</Text>
				<Text>Cantidad</Text>
				<Text>Precio</Text>
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
				<BotonDefault>
					<Text>Cancelar</Text>
				</BotonDefault>
				<BotonDefault>
					<Text>Confirmar</Text>
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
		justifyContent: 'space-between',
		paddingHorizontal: 15,
		paddingVertical: 10
	},
});

export default CarritoScreen;