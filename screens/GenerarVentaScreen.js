import React, { useState, useEffect, useCallback } from 'react';
import {
	Text,
	View,
	Button,
	Image,
	Platform,
	TouchableOpacity,
	TouchableNativeFeedback, //ripple effect is only on android 21+
	Dimensions,
	StyleSheet,
	TextInput,
	FlatList,
	Alert,
	Keyboard
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { PALETAS, AGUAS } from '../data/productos';

import Colors from '../constants/Colors';
import BotonDefault from '../components/BotonDefault';
import MyHeaderButton from '../components/MyHeaderButton';

let TouchableComp = TouchableOpacity;
if (Platform.Version >= 21) {
	TouchableComp = TouchableNativeFeedback;
}

const renderProductItem = (setSeleccion, itemData) => {
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
		<View style={{
			flex: 1,
			flexDirection: 'row',
			justifyContent: 'space-between',
			overflow: 'hidden'
		}}>
			<TouchableComp
				activeOpacity={0.6}
				onPress={() => {
					setSeleccion(itemData.item.id);
				}}
			>
				<View style={styles.items}>
					<Text>{producto} {itemData.item.sabor}{' '}({itemData.item.tipo})</Text>
					<Text>${itemData.item.precio}</Text>
				</View>
			</TouchableComp>
		</View>
	);
};

const GenerarVentaScreen = props => {
	const [busqueda, setBusqueda] = useState('');
	const [seleccion, setSeleccion] = useState('');
	const [amount, setAmount] = useState('');
	const [cart, setCart] = useState([]);

	const productosMostrados = busqueda == '' ? [...PALETAS, ...AGUAS]
		: [...PALETAS.filter(pale => pale.sabor.includes(busqueda)),
		...AGUAS.filter(pale => pale.sabor.includes(busqueda))];


	const amountHandler = inputText => {
		setAmount(inputText.replace(/[^0-9]/g, ''));
	};
	const resetAmountHandler = () => {
		setAmount('');
		setSeleccion('');
	};
	const confirmAmountHandler = useCallback(() => {
		const chosenAmount = parseInt(amount);
		if (isNaN(chosenAmount) || chosenAmount <= 0 || chosenAmount > 99) {
			Alert.alert(
				'Numero invalido!!',
				'Debe seleccionar una cantidad entre 0 y 99',
				[{ text: 'Ok', style: 'destructive', onPress: resetAmountHandler }]
			);
			return;
		}
		setCart(pastCart => [...pastCart, { id: seleccion, cantidad: amount }]);
		resetAmountHandler();
		Keyboard.dismiss();
	});

	//const { navigation } = props;
	useEffect(() => {
		console.log(cart);
		if (cart !== 'undefined' && cart.length > 0){
			props.navigation.setParams({ cartItems: cart });
			//console.log(props.navigation.getParam('cartItems'));
		}
	}, [cart])

	const vistaAmount = () => {
		let producto =
			[...PALETAS.filter(pale => pale.id.includes(seleccion)),
			...AGUAS.filter(pale => pale.id.includes(seleccion))]
		producto = producto[0];
		let nombre;
		switch (producto.id.charAt(0)) {
			case 'p':
				nombre = 'Paleta de ';
				break;
			case 'a':
				nombre = 'Agua de ';
				break;
			case 'n':
				nombre = 'Nieve de ';
				break;
			default:
				nombre = 'E404 ';
				break;
		}

		return (
			<View style={styles.contador}>
				<Text>{nombre}{producto.sabor}{' '}({producto.tipo}){' '}${producto.precio}</Text>
				<TextInput
					style={styles.input}
					blurOnSubmit //ANDROID
					autoCorrect={false}
					keyboardType="number-pad"//doesnt allow decimal IOS 
					maxLength={2}
					placeholder='Cantidad'
					placeholderTextColor={Colors.scDark}
					onChangeText={amountHandler}
					value={amount}
				/>
				<View style={styles.buttonContainer}>
					<View style={{ width: 90 }}>
						<Button
							title="Cancelar"
							onPress={resetAmountHandler}
							color={Colors.scDark}
						/>
					</View>
					<View style={{ width: 80 }}>
						<Button
							title="Aceptar"
							onPress={confirmAmountHandler}
							color={Colors.scDark}
						/>
					</View>
				</View>
			</View>
		);
	};

	//console.log(seleccion);
	let listaVisible = (seleccion == '' ? (
		<FlatList
			data={productosMostrados}
			keyExtractor={(item, index) => item.id}
			renderItem={renderProductItem.bind(this, setSeleccion)}
			style={{ width: '100%', flexGrow: 1 }}
		/>
	) : vistaAmount());

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
				{listaVisible}
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
						navData.navigation.navigate({
							routeName: 's2Carro',
							params: {
								cartItems: navData.navigation.getParam('cartItems')
							}
						});
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
		width: '95%',
		alignItems: 'center'
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
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
		paddingVertical: 10
	},
	contador: {
		width: '80%',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.secondaryColor,
		borderRadius: 10,
	}
});

export default GenerarVentaScreen;