import React, {useEffect, useState} from "react";
import {FlatList, RefreshControl, StyleSheet, Text, View} from "react-native";

const ResultsScreen = () => {
    const [refreshing, setRefreshing] = React.useState(false);
    const [resultsData, setData] = useState([]);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            getResults();
            setRefreshing(false);
        }, 2000);
    }, []);

    const getResults = async () => {
        try{
            const response = await fetch('https://tgryl.pl/quiz/results?last=20');
            const json = await response.json();
            setData(json)
        }catch (error){
            console.log(error);
        }
    }

    useEffect(() => {
        getResults();
    }, []);

    const renderItem = ({ item }) => {
        return (
            <View key={item.id.toString()} style={styles.row}>
                <Text style={styles.cell}>{item.nick}</Text>
                <Text style={styles.cell}>{item.score}/{item.total}</Text>
                <Text style={styles.cell}>{item.type}</Text>
                <Text style={styles.cell}>{item.createdOn}</Text>
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
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
            />
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
        padding: 5,
        fontFamily: "Poppins-Bold"
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
        fontSize: 15,
        fontFamily: "Roboto-Regular"
    }
});
export default ResultsScreen;