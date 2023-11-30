import React from "react";
import {FlatList, StyleSheet, Text, View} from "react-native";

const resultsData = [
    {id: 1, nick: "player1", points: "18/20", type: "test1", date: "21-11-2018"},
    {id: 2, nick: "player2", points: "15/20", type: "test1", date: "20-11-2018"},
    {id: 3, nick: "player3", points: "13/20", type: "test2", date: "22-11-2018"},
    {id: 4, nick: "player4", points: "20/20", type: "test3", date: "24-11-2018"},
    {id: 5, nick: "player5", points: "11/20", type: "test2", date: "25-11-2018"},
    {id: 6, nick: "player6", points: "18/20", type: "test1", date: "26-11-2018"},
]
const ResultsScreen = () => {

    const renderItem = ({ item }) => {
        return (
            <View key={item.id.toString()} style={styles.row}>
                <Text style={styles.cell}>{item.nick}</Text>
                <Text style={styles.cell}>{item.points}</Text>
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