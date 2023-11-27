import React from "react";
import {StyleSheet, Text, View} from "react-native";
import Header from "./Header";

function Home(){
    return (
        <View style={styles.container}>
            <Header text = "Home Page"/>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
    }
});
export default Home;