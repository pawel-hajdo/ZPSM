import React from "react";
import {StyleSheet, TouchableOpacity, Text} from "react-native";

const CustomButton = ({ onPress, title }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#f4511e",
        padding: 10,
        borderRadius: 5,
        width: 200,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
    },
});

export default CustomButton;