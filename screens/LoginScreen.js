import React, { useState } from 'react';
import {
	Text,
	View,
	Image,
	Button,
	Dimensions,
	StyleSheet,
	TextInput,
	ScrollView,
	Alert
} from 'react-native';

import Colors from '../constants/Colors';
import BotonDefault from '../components/BotonDefault';

const LoginScreen = props => {
	const [userInput, setUserInput] = useState('');
	const [passInput, setPassInput] = useState('');

	return (
		<ScrollView>
			<View style={styles.screen}>
				<View style={styles.imageContainer}>
					<Image
						source={require('../assets/logo.png')}
						fadeDuration={1000}
						style={styles.image}
						resizeMode="center"
					/>
				</View>
				<View style={styles.buttonContainer}>
					<Text>Paleteria la Michoacana</Text>
					<TextInput
						style={styles.input}
						autoCorrect={false}
						onChangeText={setUserInput}
						value={userInput}
						placeholder='Usuario'
					/>
					<TextInput
						style={styles.input}
						autoCorrect={false}
						onChangeText={setPassInput}
						value={passInput}
						placeholder='Contraseña'
					/>
					<BotonDefault
						onPress={() => Alert.alert('Usuario y/o contraseñas incorrectas')}
					>
						<Text>Hello</Text>
					</BotonDefault>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		//flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingVertical: 10
	},
	imageContainer: {
		//width: '80%',
		width: Dimensions.get('window').width * 0.7,
		height: Dimensions.get('window').width * 0.7,
		borderRadius: Dimensions.get('window').width * 0.7 / 2,
		//height: 300, //on Android bordRadius is calculated as
		//borderRadius: 200, //an ellipse, thus needing tools
		borderWidth: 3, //to correctly pinpoint a circle
		borderColor: 'white', //across different devices
		overflow: 'hidden',
		marginVertical: Dimensions.get('window').height / 20,
		alignItems: 'center'
	},
	buttonContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 15,
		width: '80%'
	},
	input: {
		height: 30,
		width: '80%',
		textAlign: 'center',
		borderColor: Colors.secondaryColor,
		borderWidth: 1,
		color: Colors.scLight,
		marginVertical: 10
	}
});

export default LoginScreen;