import React from "react";
import {View, StyleSheet, Text} from "react-native";

const QuestionCardView = (params) => {
    const getTitle = () => {
        return params.title;
    }

    const getDescription = () => {
        return params.description;
    }

    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <Text style={styles.title}>{getTitle()}</Text>
                <Text style={styles.description}numberOfLines={2}>{getDescription()}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 8,
        overflow: "hidden",
        margin: 10,
        elevation: 3, // Elevation działa tylko na Androidzie
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    cardContent: {
        padding: 15,
    },
    title: {
        fontSize: 18,
        fontFamily: "Poppins-Bold"
    },
    description: {
        fontSize: 14,
        color: "#666",
        marginTop: 8,
        fontFamily: "Roboto-Regular"
    },
});
export default QuestionCardView;