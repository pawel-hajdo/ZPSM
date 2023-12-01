import React, {useState} from "react";
import {View} from "react-native";
import Question from "./Question";
import testsData from "../../data/TestsData";
import TestEndScreen from "./TestEndScreen";

const TestPage = ({route, navigation}) => {

    const { testId, testTitle, testDesc } = route.params;
    const selectedTest = testsData.find((test) => test.id === testId);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [points, setPoints] = useState(0);

    const handleNextQuestion = () => {
        if (currentQuestionIndex < selectedTest.questions.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
            navigation.navigate("TestEndScreen", {points: points});
            console.log(points)
        }
    };

    const handleUpdatePoints = (newPoints) => {
        setPoints(newPoints);
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
                onUpdatePoints={handleUpdatePoints}
            />
        </View>

    );
};

export default TestPage;