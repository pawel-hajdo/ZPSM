import React from "react";
import {ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View} from "react-native";
import QuestionCardView from "../shared/QuestionCardView";
import CustomButton from "../shared/CustomButton";
import {useNavigation} from "@react-navigation/native";

const Home = ({navigation, testsData}) => {

        const handleCheckResults = () => {
        navigation.navigate("ResultsScreen");
    };
    const handleNavigateToTestPage = (testId, testTitle, testDesc) => {
        navigation.navigate(testTitle, {
            testId: testId,
            testTitle: testTitle,
            testDesc: testDesc
        });
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {testsData.map((test) =>
                    <TouchableOpacity
                        key = {test.id}
                        onPress={() => handleNavigateToTestPage(test.id, test.name, test.description)}
                    >
                        <QuestionCardView title = {test.name} description = {test.description}/>
                    </TouchableOpacity>
                )}
            </ScrollView>
            <View style={styles.bottomContent}>
                <Text style={{fontSize: 16}}>Get to know your ranking result</Text>
                <CustomButton title="Check!" onPress={handleCheckResults}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
    },
    scrollView:{
        height: '85%',
        marginBottom: "3%"
    },
    bottomContent: {
        padding: 16,
        backgroundColor: 'lightgray',
        alignItems: 'center',
    },
});
export default Home;