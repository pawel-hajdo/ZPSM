import React from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";
import results from "../../data/Results";

const resultsData = results;
const ResultsScreen = () => {

    const renderItem = ({ item }) => {
        return (
            <View key={item.id.toString()} style={styles.row}>
                <Text style={styles.cell}>{item.nick}</Text>
                <Text style={styles.cell}>{item.score}/{item.total}</Text>
                <Text style={styles.cell}>{item.type}</Text>
                <Text style={styles.cell}>{item.date}</Text>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Nick</Text>
                <Text style={styles.heading}>Points</Text>
                <Text style={styles.heading}>Type</Text>
                <Text style={styles.heading}>Date</Text>
            </View>
            <FlatList
                data={resultsData}
                keyExtractor={(item) => {item.id.toString()}}
                renderItem={renderItem}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 2,
        backgroundColor: "orange",
    },
    heading: {
        flex: 1,
        fontSize: 15,
        color: "white",
        padding: 5
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
        marginHorizontal: 2,
        elevation: 1,
        borderRadius: 5,
        borderColor: "#fff",
        padding: 10,
        backgroundColor: "#fff"
    },
    cell: {
        flex: 1,
        textAlign: "left",
        fontSize: 15
    }
});
export default ResultsScreen;