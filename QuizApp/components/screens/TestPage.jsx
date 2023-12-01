import React, {useState} from "react";
import {View} from "react-native";
import Question from "./Question";
import testsData from "../../data/TestsData";

const TestPage = ({route, navigation}) => {

    const { testId, testTitle, testDesc } = route.params;
    const selectedTest = testsData.find((test) => test.id === testId);

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const handleNextQuestion = () => {
        if (currentQuestionIndex < selectedTest.questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
            console.log("No more questions");
        }
    };

    return (
        <View>
            <Question
                key={selectedTest.questions[currentQuestionIndex].id}
                id={selectedTest.questions[currentQuestionIndex].id+1}
                question={selectedTest.questions[currentQuestionIndex].question}
                options={selectedTest.questions[currentQuestionIndex].options}
                answer={selectedTest.questions[currentQuestionIndex].answer}
                handleNextQuestion={handleNextQuestion}
            />
        </View>

    );
};

export default TestPage;