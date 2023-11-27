import React from "react";
import Header from "./Header";
import {View} from "react-native";
import QuestionCardView from "./QuestionCardView";

const TestPage = ({route, navigation}) => {

    const { testId, testTitle, testDesc } = route.params;

    return (
        <View>
            <Header title = {testTitle}/>
            <QuestionCardView title = {testTitle} description = {testDesc}/>
        </View>

    );
};

export default TestPage;