import React from "react";
import {ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View} from "react-native";
import Header from "./Header";
import QuestionCardView from "./QuestionCardView";
import CustomButton from "./CustomButton";
import {useNavigation} from "@react-navigation/native";

const Tests = [
    {
        id: 1,
        title: "Test1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida eros eros, ut eleifend dui ullamcorper vel. Nullam eget neque eu eros efficitur ullamcorper. Donec augue neque, accumsan ut facilisis vehicula, volutpat quis odio. Donec nec tincidunt nibh. Sed molestie cursus tellus, in ultricies metus varius dignissim. Sed a tincidunt metus."
    },
    {
        id: 2,
        title: "Test2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida eros eros, ut eleifend dui ullamcorper vel. Nullam eget neque eu eros efficitur ullamcorper. Donec augue neque, accumsan ut facilisis vehicula, volutpat quis odio. Donec nec tincidunt nibh. Sed molestie cursus tellus, in ultricies metus varius dignissim. Sed a tincidunt metus."
    },
    {
        id: 3,
        title: "Test3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida eros eros, ut eleifend dui ullamcorper vel. Nullam eget neque eu eros efficitur ullamcorper. Donec augue neque, accumsan ut facilisis vehicula, volutpat quis odio. Donec nec tincidunt nibh. Sed molestie cursus tellus, in ultricies metus varius dignissim. Sed a tincidunt metus."
    },
    {
        id: 4,
        title: "Test4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida eros eros, ut eleifend dui ullamcorper vel. Nullam eget neque eu eros efficitur ullamcorper. Donec augue neque, accumsan ut facilisis vehicula, volutpat quis odio. Donec nec tincidunt nibh. Sed molestie cursus tellus, in ultricies metus varius dignissim. Sed a tincidunt metus."
    },
    {
        id: 5,
        title: "Test5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida eros eros, ut eleifend dui ullamcorper vel. Nullam eget neque eu eros efficitur ullamcorper. Donec augue neque, accumsan ut facilisis vehicula, volutpat quis odio. Donec nec tincidunt nibh. Sed molestie cursus tellus, in ultricies metus varius dignissim. Sed a tincidunt metus."
    },
    {
        id: 6,
        title: "Test6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida eros eros, ut eleifend dui ullamcorper vel. Nullam eget neque eu eros efficitur ullamcorper. Donec augue neque, accumsan ut facilisis vehicula, volutpat quis odio. Donec nec tincidunt nibh. Sed molestie cursus tellus, in ultricies metus varius dignissim. Sed a tincidunt metus."
    },
    {
        id: 7,
        title: "Test7",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida eros eros, ut eleifend dui ullamcorper vel. Nullam eget neque eu eros efficitur ullamcorper. Donec augue neque, accumsan ut facilisis vehicula, volutpat quis odio. Donec nec tincidunt nibh. Sed molestie cursus tellus, in ultricies metus varius dignissim. Sed a tincidunt metus."
    },
    {
        id: 8,
        title: "Test8",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida eros eros, ut eleifend dui ullamcorper vel. Nullam eget neque eu eros efficitur ullamcorper. Donec augue neque, accumsan ut facilisis vehicula, volutpat quis odio. Donec nec tincidunt nibh. Sed molestie cursus tellus, in ultricies metus varius dignissim. Sed a tincidunt metus."
    },
]

const Home = ({navigation}) => {

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                {Tests.map((test) =>
                    <TouchableOpacity
                        key = {test.id}
                        onPress={() => navigation.navigate("TestPage",{
                            testId: test.id,
                            testTitle: test.title,
                            testDesc: test.description
                        })}
                    >
                        <QuestionCardView title = {test.title} description = {test.description}/>
                    </TouchableOpacity>
                )}
            </ScrollView>
            <View style={styles.bottomContent}>
                <Text style={{fontSize: 16}}>Get to know your ranking result</Text>
                <CustomButton title="Check!"/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
    },
    scrollView:{
        height: '85%',
        marginBottom: "3%"
    },
    bottomContent: {
        padding: 16,
        backgroundColor: 'lightgray',
        alignItems: 'center',
    },
});
export default Home;