import React from "react";
import {ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View} from "react-native";
import QuestionCardView from "../shared/QuestionCardView";
import CustomButton from "../shared/CustomButton";
import {useNavigation} from "@react-navigation/native";
import testsData from "../../data/TestsData";

const TestsData = testsData;
const Home = ({navigation}) => {

    const handleCheckResults = () => {
        navigation.navigate("ResultsScreen");
    };
    const handleNavigateToTestPage = (testTitle, testDesc) => {
        navigation.navigate(testTitle, {
            testTitle: testTitle,
            testDesc: testDesc
        });
    };

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {TestsData.map((test) =>
                    <TouchableOpacity
                        key = {test.id}
                        onPress={() => handleNavigateToTestPage(test.title, test.description)}
                    >
                        <QuestionCardView title = {test.title} description = {test.description}/>
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