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
                <View style={styles.button}>
                    <Text style={styles.buttonText}>{props.children}</Text>
                </View>
            </ButtonComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 25,
        overflow: 'hidden' //any child component that goes out will be clippde
    },
    button: {
        backgroundColor: Colors.primaryColor,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 15
    },
    buttonText: {
        color: 'black',
        fontSize: 18
    }

});

export default BotonDefault;