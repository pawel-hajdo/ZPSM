import React, {useEffect, useState} from "react";
import {ActivityIndicator, View} from "react-native";
import Question from "./Question";
import TestEndScreen from "./TestEndScreen";

const TestPage = ({route, navigation}) => {

    const { testId, numberOfTasks } = route.params;
    const [isLoading, setLoading] = useState(true);
    const [test, setTest] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [points, setPoints] = useState(0);

    const getTestDetails = async () => {
        try{
            const response = await fetch(`https://tgryl.pl/quiz/test/${testId}`);
            const json = await response.json();
            setTest(json)
        }catch (error){
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getTestDetails();
    }, []);

    const handleNextQuestion = () => {
        if (currentQuestionIndex < test.tasks.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
            sendResults();
            navigation.replace("TestEndScreen", {points: points});
            console.log(points)
        }
    };

    const handleUpdatePoints = (newPoints) => {
        setPoints(newPoints);
    };

    const sendResults = async () =>{
        fetch('https://tgryl.pl/quiz/result', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "nick": 'test123',
                "score": points,
                "total": numberOfTasks,
                "type": test.tags[0],
            }),
        }).then(r => console.log(r.status));
    }
    return (
        <View>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <Question
                    key={test.tasks[currentQuestionIndex]}
                    id={currentQuestionIndex+1}
                    tags={test.tags}
                    testLength={numberOfTasks}
                    question={test.tasks[currentQuestionIndex].question}
                    options={test.tasks[currentQuestionIndex].answers}
                    handleNextQuestion={handleNextQuestion}
                    onUpdatePoints={handleUpdatePoints}
                    duration={test.tasks[currentQuestionIndex].duration}
                />
            )}
        </View>
    );
};

export default TestPage;