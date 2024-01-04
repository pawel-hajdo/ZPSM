import React, {useEffect, useState} from "react";
import {ActivityIndicator, View} from "react-native";
import Question from "./Question";
import TestEndScreen from "./TestEndScreen";
import _ from "lodash";
import {getTestDetailsFromApi, sendResultsToApi} from "../ApiManager";

const TestPage = ({route, navigation}) => {

    const { testId, numberOfTasks } = route.params;
    const [isLoading, setLoading] = useState(true);
    const [test, setTest] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [points, setPoints] = useState(0);
    const [haveInternetConnection, setInternetConnection] = useState(true);


    useEffect(() => {
        getTestDetails(testId).then(() => {setLoading(false)});
    }, []);

    const getTestDetails = async (id) => {
        if(haveInternetConnection){
            await getTestDetailsFromApi(id)
                .then(shuffleTest)
        }else{
            //getTestDetailsFomDB().then(setTests);
        }
    }

    const shuffleTest = (json) => {
        const shuffledAnswers = json.tasks.map(task => ({
            ...task,
            answers: _.shuffle(task.answers),
        }));

        const shuffledTasks = _.shuffle(shuffledAnswers);

        setTest({ ...json, tasks: shuffledTasks });
    }
    const handleNextQuestion = () => {
        if (currentQuestionIndex < test.tasks.length - 1) {
            setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        } else {
            sendResultsToApi(points, numberOfTasks, test.tags[0])
                .then(() => navigation.replace("TestEndScreen", {points: points}));

            console.log(points)
        }
    };

    const handleUpdatePoints = (newPoints) => {
        setPoints(newPoints);
    };

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