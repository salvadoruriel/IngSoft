import React, { useState } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	TouchableNativeFeedback, //ripple effect is only on android 21+
	Platform
} from 'react-native';
import Colors from '../constants/Colors';

const BotonDefault = props => {
	let ButtonComponent = TouchableOpacity;

	if (Platform.Version >= 21) {
		ButtonComponent = TouchableNativeFeedback;
	}

	return (
		<View style={styles.buttonContainer}>
			<ButtonComponent
				activeOpacity={0.6}
				onPress={props.onPress}
			>
				<View style={{...styles.button, ...props.style }}>
					<Text style={styles.buttonText}>{props.children}</Text>
				</View>
			</ButtonComponent>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		borderRadius: 10,
		overflow: 'hidden',
		marginVertical: 10
	},
	button: {
		backgroundColor: Colors.pcLight,
		paddingVertical: 12,
		paddingHorizontal: 25,
		borderRadius: 10
	},
	buttonText: {
		color: 'black',
		fontSize: 18,
		textAlign: 'center'
	}

});

export default BotonDefault;