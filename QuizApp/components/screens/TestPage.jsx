import React from "react";
import {View} from "react-native";
import Question from "./Question";
import testsData from "../../data/TestsData";

const TestPage = ({route, navigation}) => {

    const { testId, testTitle, testDesc } = route.params;
    const selectedTest = testsData.find((test) => test.id === testId);

    return (
        <View>
            {selectedTest.questions.map((questionData) => (
                <Question
                    key={questionData.id}
                    id={questionData.id}
                    question={questionData.question}
                    //questionDescription={questionData.questionDescription}
                    options={questionData.options}
                />
            ))}
        </View>

    );
};

export default TestPage;