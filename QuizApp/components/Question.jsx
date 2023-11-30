import React, {useEffect, useState} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import * as Progress from "react-native-progress";

const Question = (params) => {

    const [progress, setProgress] = useState(0);
    const [timeLeft, setTimeLeft] = useState(30);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => prevProgress + 0.033);
            setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);

            if (progress >= 1 || timeLeft <= 0) {
                clearInterval(interval);
                //dodać przejście do następnego pytania?
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [progress, timeLeft]);

    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.questionInfo}>Question {params.id} of 10</Text>
                <Text style={styles.questionInfo}>Time Left: {timeLeft} sec</Text>
            </View>
            <Progress.Bar progress={progress} width={null} animated={true} style = {{margin: 8}}/>
            <Text style={styles.questionText}>{params.question}</Text>
            <Text style={styles.questionDescription}>{params.questionDescription}</Text>
            <View style={styles.optionsContainer}>
                {params.options.map((option, index) => (
                    <TouchableOpacity key = {index} style={styles.button}>
                        <Text style={styles.buttonText}>{option}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    infoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 8,
    },
    questionInfo: {
        marginBottom: 8,
        fontSize: 18,
        fontWeight: "bold",
    },
    questionText: {
        margin: 8,
        fontSize: 20,
    },
    questionDescription: {
        marginHorizontal: 8,
        marginBottom: 16,
        fontSize: 14,
        color: "#555", // Text color
    },
    optionsContainer: {
        flexDirection: "row",
        flexWrap: 'wrap',
        justifyContent: "space-around",
    },
    button: {
        backgroundColor: "#f4511e",
        padding: 10,
        borderRadius: 5,
        width: "45%",
        marginTop: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        textAlign: "center",
        padding: 25,
    },
})
export default Question;