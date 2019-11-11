import React, { useState } from 'react';
import {
	Text,
	View,
	Image,
	Dimensions,
	StyleSheet,
	TextInput,
	ScrollView,
	Alert,
	KeyboardAvoidingView
} from 'react-native';

import Colors from '../constants/Colors';
import BotonDefault from '../components/BotonDefault';

const LoginScreen = props => {
	const [userInput, setUserInput] = useState('');
	const [passInput, setPassInput] = useState('');

	const checkUser = () => {
		if (userInput != 'Sa' || passInput != '1')
			return Alert.alert('Usuario y/o contraseñas incorrectas');
		else
			return props.navigation.replace('Ingreso');
	}

	return (
		<ScrollView>
			<KeyboardAvoidingView behavior="position" keyboardVerticalOffset={40}>
				<View style={styles.screen}>
					<View style={styles.imageContainer}>
						<Image
							source={require('../assets/logo.png')}
							fadeDuration={1000}
							style={styles.image}
							resizeMode="center"
						/>
					</View>
					<View style={styles.inputContainer}>
						<Text style={{ fontSize: 20 }}>Paleteria la Michoacana</Text>
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
							secureTextEntry={true}
						/>
						<BotonDefault
							onPress={checkUser}
						>
							<Text>Login</Text>
						</BotonDefault>
					</View>
				</View>
			</KeyboardAvoidingView>
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
		marginVertical: Dimensions.get('window').height / 30,
		alignItems: 'center'
	},
	inputContainer: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: Dimensions.get('window').height / 60,
		width: '80%'
	},
	input: {
		height: 30,
		width: '80%',
		textAlign: 'center',
		borderColor: Colors.secondaryColor,
		borderWidth: 1,
		color: 'black',
		marginVertical: 15
	}
});

export default LoginScreen;