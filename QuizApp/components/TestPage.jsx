import React from "react";
import {View} from "react-native";
import QuestionCardView from "./QuestionCardView";

const TestPage = ({route, navigation}) => {

    const { testId, testTitle, testDesc } = route.params;

    return (
        <View>
            <QuestionCardView title = {testTitle} description = {testDesc}/>
        </View>

    );
};

export default TestPage;