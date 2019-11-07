import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo'; //to wait until elements load
import { useScreens } from 'react-native-screens';//use native screens

import AppNavigator from './navigation/AppNavigator';

useScreens(); // to improve performance

//en caso de usar fuentes
const fetchFonts = () =>{
	return Font.loadAsync({
		//'example': require('./assets/fonts/example.ttf'),
		//'example-bold': require('./assets/fonts/example-Bold.ttf')
	});
}

export default function App() {
	const [isFontLoaded, setIsFontLoaded] = useState(true);

	if (!isFontLoaded){
		return (
			<AppLoading
				startAsync={fetchFonts} //y cualquier otra cosa pesada a cargar
				onFinish={() => setIsFontLoaded(true)}
			/>
		);
	}

	return (
		<AppNavigator />
	);
}