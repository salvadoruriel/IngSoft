import React from 'react';
import {
	Text,
	View,
	ScrollView,
	Image,
	Dimensions,
	StyleSheet
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import Colors from '../constants/Colors';
import BotonDefault from '../components/BotonDefault';
import MyHeaderButton from '../components/MyHeaderButton';

const MenuPrincipalScreen = props => {
	return (
		<ScrollView>
			<View style={styles.screen}>
				<View style={styles.imageContainer}>
					<Image
						source={require('../assets/logo.png')}
						fadeDuration={600}
						style={styles.image}
						resizeMode="center"
					/>
				</View>
				<View style={styles.botonContainer}>
					<BotonDefault
						onPress={() => props.navigation.navigate('GenerarVenta')}
						style={styles.botonVenta}
					>
						<Text>Generar Venta</Text>
					</BotonDefault>
					<View style={styles.botonContainer}>
						<BotonDefault
							onPress={() => props.navigation.navigate('InventarioMenu')}
							style={styles.botonNormal}
						>
							<Text>Inventario</Text>
						</BotonDefault>
						<BotonDefault
							onPress={() => props.navigation.navigate('Insumos')}
							style={styles.botonNormal}
						>
							<Text>Insumos</Text>
						</BotonDefault>
						<BotonDefault
							onPress={() => props.navigation.navigate('Registro')}
							style={styles.botonNormal}
						>
							<Text>Registro</Text>
						</BotonDefault>
					</View>
					<Text>Usuario: Sa</Text>
				</View>
			</View>
		</ScrollView>
	);
}

MenuPrincipalScreen.navigationOptions = navData => {

	return {
		headerTitle: 'Menu Principal',
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
		)
	};
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		//flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 10
	},
	imageContainer: {
		//width: '80%',
		width: Dimensions.get('window').width * 0.4,
		height: Dimensions.get('window').width * 0.4,
		borderRadius: Dimensions.get('window').width * 0.4 / 2,
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
	botonContainer: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: Dimensions.get('window').width / 70
	},
	botonVenta: {
		paddingVertical: 30,
		paddingHorizontal: 65
	},
	botonNormal: {
		paddingVertical: 15,
		paddingHorizontal: 55
	}
});

export default MenuPrincipalScreen;