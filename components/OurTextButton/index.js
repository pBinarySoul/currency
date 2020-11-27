import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";

const OurTextButton = (props) => {
    const { children, style, textStyle, onPress, disabled } = props;
    
    return (
        <TouchableOpacity disabled={disabled} onPress={(e) => {
        	if ( onPress && !disabled )
        		onPress(e);
        }}>
            <View style={[styles.buttonContainer, style]}>
                <Text style={[styles.textStyle, textStyle]}>{children}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default OurTextButton;