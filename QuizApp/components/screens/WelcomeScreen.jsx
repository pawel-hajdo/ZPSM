import React, {useEffect, useState} from "react";
import {ScrollView, StyleSheet, Text, View} from "react-native";
import CustomButton from "../shared/CustomButton";
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from "react-native-splash-screen";
const WelcomeScreen = ({navigation}) => {

    const termsAndConditions = "**Terms of Service for QuizApp**\n\n" +

        "**1. Acceptance of Terms**\n\n" +
        "By downloading, installing, or using the QuizApp application, you agree to comply with and be bound by the following Terms of Service.\n\n" +

        "**2. Use of the App**\n\n" +
        "You agree to use the QuizApp application solely for its intended purposes as a quiz and trivia application. You may not use the app for any illegal or unauthorized purpose.\n\n" +

        "**3. User Accounts**\n\n" +
        "To access certain features of the app, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account information and password.\n\n" +

        "**4. Content**\n\n" +
        "The content provided by QuizApp, including questions, answers, and other materials, is for informational and entertainment purposes only. QuizApp does not guarantee the accuracy or completeness of any content.\n\n" +

        "**5. User-Generated Content**\n\n" +
        "Users may submit their own quiz questions and content. By submitting content, you grant QuizApp a non-exclusive, royalty-free license to use, modify, and distribute the content.\n\n" +

        "**6. Prohibited Activities**\n\n" +
        "You agree not to engage in any of the following activities:\n" +
        "- Attempting to interfere with the proper functioning of the app.\n" +
        "- Circumventing any security features or accessing areas of the app you are not authorized to access.\n" +
        "- Uploading malicious code or engaging in any form of hacking.\n\n" +

        "**7. Privacy Policy**\n\n" +
        "QuizApp respects your privacy. Our Privacy Policy outlines how we collect, use, and disclose your personal information. By using the app, you consent to the terms of our Privacy Policy.\n\n" +

        "**8. Termination**\n\n" +
        "QuizApp reserves the right to terminate or suspend your account and access to the app at any time for violations of these Terms of Service.\n\n" +

        "**9. Changes to Terms**\n\n" +
        "QuizApp may revise these Terms of Service at any time. It is your responsibility to review the terms periodically. Your continued use of the app after changes are made constitutes acceptance of those changes.\n\n" +

        "**10. Contact Information**\n\n" +
        "For questions about these Terms of Service, please contact us at support@quizapp.com.";

    const [isFirstRun, setIsFirstRun] = useState(true);

    useEffect(() => {
        const checkIfFirstRun = async () => {
            try {
                const value = await AsyncStorage.getItem('firstRun');
                if (value !== null) {
                    setIsFirstRun(false);
                }
            } catch (error) {
                console.error('Error reading from AsyncStorage:', error);
            }
        };
        checkIfFirstRun();
    }, []);

    useEffect(() => {
        if (!isFirstRun) {
            navigation.replace("Home Page");
        }
    }, [isFirstRun, navigation]);
    const handleAgree = async () => {
        try {
            await AsyncStorage.setItem('firstRun', 'true');
            navigation.replace("Home Page");
        } catch (error) {
            console.error('Error writing to AsyncStorage:', error);
        }
    };


    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>Welcome to MyApp!</Text>
                <Text style={styles.subtitle}>Before you begin, please read and accept our terms:</Text>
                <Text style={styles.termsAndConditions}>{termsAndConditions}</Text>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <CustomButton title="I Agree" onPress={handleAgree} />
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        marginBottom: 10,
    },
    termsAndConditions: {
        fontSize: 16,
        textAlign: 'justify',
        marginBottom: 20,
    },
    buttonContainer: {
        marginTop: 10,
    },
});

export default WelcomeScreen;