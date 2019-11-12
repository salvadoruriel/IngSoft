import React, { useState, useEffect, useCallback } from 'react';
import {
	Text,
	View,
	Image,
	Dimensions,
	StyleSheet,
	TextInput,
	Alert
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import Colors from '../constants/Colors';
import MyHeaderButton from '../components/MyHeaderButton';
import BotonDefault from '../components/BotonDefault';

const AltaRegiScreen = props => {
	const [nombre, setNombre] = useState('');
	const [edad, setEdad] = useState('');
	const [cargo, setCargo] = useState('');
	const [pass, setPass] = useState('');

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
			<Text style={{ fontSize: 28 }}>Alta de empleado</Text>
			<Text style={{ fontSize: 14 }}>Rellenar todos los campos</Text>
			<View style={styles.items}>
				<Text>Nombre</Text>
			</View>
			<TextInput
				style={styles.input}
				onChangeText={setNombre}
				value={nombre}
			/>
			<View style={styles.items}>
				<Text>Edad</Text>
			</View>
			<TextInput
				style={styles.input}
				onChangeText={setEdad}
				value={edad}
			/>
			<View style={styles.items}>
				<Text>Cargo</Text>
			</View>
			<TextInput
				style={styles.input}
				onChangeText={setCargo}
				value={cargo}
			/>
			<View style={styles.items}>
				<Text>Contraseña</Text>
			</View>
			<TextInput
				style={styles.input}
				onChangeText={setPass}
				value={pass}
			/>
			<BotonDefault
				onPress={() => Alert.alert('No se han podido hacer los cambios')}
				style={styles.botonNormal}
			>
				<Text>Confirmar</Text>
			</BotonDefault>
		</View>
	);
}


AltaRegiScreen.navigationOptions = navData => {
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
		justifyContent: 'space-around'
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
		width: '95%',
		textAlign: 'center',
		borderColor: Colors.scDark,
		backgroundColor: Colors.pcLight,
		borderWidth: 1,
		color: 'black',
		marginVertical: 0
	},
	items: {
		flexDirection: 'row',
		borderColor: '#ccc',
		borderWidth: 1,
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
	botonNormal: {
		paddingVertical: 15,
		paddingHorizontal: 55
	}
});

export default AltaRegiScreen;