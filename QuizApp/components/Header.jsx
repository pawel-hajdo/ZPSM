import React from "react";
import {Text, View, StyleSheet} from "react-native";

function Header(params){
    console.log(params.text);
    return(
        <View style={styles.view}>
            <Text style={styles.text}>{params.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "white",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        padding: 10,
    },
    text: {
        alignSelf: 'center',
        color: "black",
        fontSize: 30,
    },
});
export default Header;