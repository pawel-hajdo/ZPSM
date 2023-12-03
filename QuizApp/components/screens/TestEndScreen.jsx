import React from "react";
import {StyleSheet, Text, View} from "react-native";
import CustomButton from "../shared/CustomButton";

const TestEndScreen = ({route, navigation}) => {
    const {points} = route.params;

    const handleNavigateToHomePage = () => {
        navigation.navigate("Home")
    };

    const handleCheckResults = () => {
        navigation.navigate("ResultsScreen");
    };


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text1}>Congratulations!</Text>
                <Text style={styles.text2}>Your score is {points}</Text>
            </View>
            <View style={styles.bottomContent}>
                <CustomButton title={"Go to home page"} customStyles={{margin: 10}} onPress={handleNavigateToHomePage}></CustomButton>
                <CustomButton title={"See ranking"} onPress={handleCheckResults}></CustomButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    header: {
        alignItems:'center',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 2,
        backgroundColor: "orange",
        elevation: 3,
    },
    text1: {
        fontSize: 24,
        color: 'white',
    },
    text2: {
        fontSize: 20,
        color: 'white'
    },
    bottomContent: {
        padding: 16,
        alignItems: 'center',
        justifyContent: "space-between"
    },
});

export default TestEndScreen;