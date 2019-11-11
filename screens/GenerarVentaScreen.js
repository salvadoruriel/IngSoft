import React, { useState } from 'react';
import {
	Text,
	View,
	Image,
	Button,
	Dimensions,
	StyleSheet,
	TextInput,
	FlatList
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { PALETAS, AGUAS } from '../data/productos';

import Colors from '../constants/Colors';
import BotonDefault from '../components/BotonDefault';
import MyHeaderButton from '../components/MyHeaderButton';

const renderProductItem = itemData => {
	//console.log(itemData);
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
		<View style={styles.items}>
			<Text>{producto} {itemData.item.sabor}{' '}({itemData.item.tipo})</Text>
			<Text>${itemData.item.precio}</Text>
		</View>
	);
};

const GenerarVentaScreen = props => {
	const [busqueda, setBusqueda] = useState('');

	const productosMostrados = busqueda == '' ? [...PALETAS, ...AGUAS]
		: [...PALETAS.filter(pale => pale.sabor.includes(busqueda)),
		...AGUAS.filter(pale => pale.sabor.includes(busqueda))];

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
			<TextInput
				style={styles.input}
				onChangeText={setBusqueda}
				value={busqueda}
				placeholder='Buscar'
				placeholderTextColor={Colors.scDark}
			/>
			<View style={styles.items}>
				<Text>Producto</Text>
				<Text>Precio</Text>
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
	input: {
		height: 30,
		width: '80%',
		textAlign: 'center',
		borderColor: Colors.scDark,
		backgroundColor: Colors.secondaryColor,
		borderWidth: 1,
		color: 'black',
		marginVertical: 15
	},
	listContainer: {
		flex: 1,
		width: '95%'
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
	}
});

export default GenerarVentaScreen;