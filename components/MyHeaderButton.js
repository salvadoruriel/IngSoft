import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';

import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const CustomHeaderButton = props => {
	//we need {...props} to pass the props otherwise we won't have them
	return (
		<HeaderButton {...props}
			IconComponent={Ionicons}
			iconSize={23}
			color={Colors.primaryColor}
		/>
	);
};

export default CustomHeaderButton;