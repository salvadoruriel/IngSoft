import React, { useState, useEffect, useCallback } from 'react';
import {
	Text,
	View,
	Image,
	Dimensions,
	StyleSheet,
	TextInput,
	FlatList,
	Alert
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { VENTAS } from '../data/productos';

import Colors from '../constants/Colors';
import MyHeaderButton from '../components/MyHeaderButton';

const renderProductItem = (itemData) => {
	//console.log(itemData);

	return (
		<View style={{
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'space-between',
			overflow: 'hidden'
		}}>
			<View style={styles.items}>
				<Text>{itemData.item.id}</Text>
				<Text>{itemData.item.ids}</Text>
				<Text>{itemData.item.totalVenta}</Text>
			</View>
		</View>
	);
};

const VentasScreen = props => {
	const [busqueda, setBusqueda] = useState('');
	//console.log(INGREDIENTES);

	const productosMostrados = busqueda == '' ? VENTAS
		: VENTAS.filter(pale => pale.nombre.includes(busqueda));

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
				<View style={{ justifyContent: 'center', alignItems: 'center' }}>
					<Text style={{ fontSize: 18 }}>
						Usuario: Sa
					</Text>
				</View>
			</View>
			<Text style={{ fontSize: 28 }}>Ventas</Text>
			<View style={styles.items}>
				<Text>fecha</Text>
				<Text>id de productos</Text>
				<Text>Total</Text>
			</View>
			<View style={styles.listContainer}>
				<FlatList
					data={productosMostrados}
					keyExtractor={(item, index) => item.id}
					renderItem={renderProductItem}
					style={{ width: '100%', flexGrow: 1 }}
				/>
			</View>
		</View>
	);
}


VentasScreen.navigationOptions = navData => {
	return {
		headerTitle: 'Generar Venta',
		headerLeft: (
			<HeaderButtons HeaderButtonComponent={MyHeaderButton}>
				<Item
					title='Regresar'
					iconName='ios-arrow-round-back'
					onPress={() => {
						navData.navigation.goBack();
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
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 30
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
	listContainer: {
		flex: 1,
		width: '95%',
		alignItems: 'center',
		marginTop: 20
	},
	items: {
		flexDirection: 'row',
		borderColor: '#ccc',
		//borderWidth: 1,
		borderBottomWidth: 1,
		padding: 10,
		marginVertical: 1,
		backgroundColor: Colors.pcLight,
		justifyContent: 'space-between',
		width: '95%'
	},
	botonNormal: {
		paddingVertical: 15,
		paddingHorizontal: 55
	}
});

export default VentasScreen;