import React from "react";
import {View} from "react-native";
import QuestionCardView from "./QuestionCardView";
import Question from "./Question";

const TestPage = ({route, navigation}) => {

    const { testId, testTitle, testDesc } = route.params;
    const quizData = [
        {
            id: 1,
            question: "This is some example of a long question to fill the content?",
            questionDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse placerat nec quam non iaculis. Praesent elit augue, condimentum at tristique sit amet, rutrum ut orci. Ut vitae quam sit amet magna interdum tincidunt. Integer tincidunt et libero a tincidunt. In hac habitasse platea dictumst. Fusce placerat metus id lacus eleifend laoreet.",
            options: ['Answer A', 'Answer B', 'Answer C', 'Answer D'],
            answer: 'Answer B'
        }
    ]

    return (
        <View>
            {quizData.map((questionData) => (
                <Question
                    key={questionData.id}
                    id={questionData.id}
                    question={questionData.question}
                    questionDescription={questionData.questionDescription}
                    options={questionData.options}
                />
            ))}
        </View>

    );
};

export default TestPage;