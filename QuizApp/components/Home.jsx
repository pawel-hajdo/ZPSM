import React from "react";
import {Button, ScrollView, StyleSheet, Text, View} from "react-native";
import Header from "./Header";
import QuestionCardView from "./QuestionCardView";

const Tests = [
    {
        title: "Test1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida eros eros, ut eleifend dui ullamcorper vel. Nullam eget neque eu eros efficitur ullamcorper. Donec augue neque, accumsan ut facilisis vehicula, volutpat quis odio. Donec nec tincidunt nibh. Sed molestie cursus tellus, in ultricies metus varius dignissim. Sed a tincidunt metus."
    },
    {
        title: "Test2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida eros eros, ut eleifend dui ullamcorper vel. Nullam eget neque eu eros efficitur ullamcorper. Donec augue neque, accumsan ut facilisis vehicula, volutpat quis odio. Donec nec tincidunt nibh. Sed molestie cursus tellus, in ultricies metus varius dignissim. Sed a tincidunt metus."
    },
    {
        title: "Test3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida eros eros, ut eleifend dui ullamcorper vel. Nullam eget neque eu eros efficitur ullamcorper. Donec augue neque, accumsan ut facilisis vehicula, volutpat quis odio. Donec nec tincidunt nibh. Sed molestie cursus tellus, in ultricies metus varius dignissim. Sed a tincidunt metus."
    },
    {
        title: "Test4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida eros eros, ut eleifend dui ullamcorper vel. Nullam eget neque eu eros efficitur ullamcorper. Donec augue neque, accumsan ut facilisis vehicula, volutpat quis odio. Donec nec tincidunt nibh. Sed molestie cursus tellus, in ultricies metus varius dignissim. Sed a tincidunt metus."
    },
    {
        title: "Test5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida eros eros, ut eleifend dui ullamcorper vel. Nullam eget neque eu eros efficitur ullamcorper. Donec augue neque, accumsan ut facilisis vehicula, volutpat quis odio. Donec nec tincidunt nibh. Sed molestie cursus tellus, in ultricies metus varius dignissim. Sed a tincidunt metus."
    },
    {
        title: "Test6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida eros eros, ut eleifend dui ullamcorper vel. Nullam eget neque eu eros efficitur ullamcorper. Donec augue neque, accumsan ut facilisis vehicula, volutpat quis odio. Donec nec tincidunt nibh. Sed molestie cursus tellus, in ultricies metus varius dignissim. Sed a tincidunt metus."
    },
    {
        title: "Test7",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida eros eros, ut eleifend dui ullamcorper vel. Nullam eget neque eu eros efficitur ullamcorper. Donec augue neque, accumsan ut facilisis vehicula, volutpat quis odio. Donec nec tincidunt nibh. Sed molestie cursus tellus, in ultricies metus varius dignissim. Sed a tincidunt metus."
    },
    {
        title: "Test8",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer gravida eros eros, ut eleifend dui ullamcorper vel. Nullam eget neque eu eros efficitur ullamcorper. Donec augue neque, accumsan ut facilisis vehicula, volutpat quis odio. Donec nec tincidunt nibh. Sed molestie cursus tellus, in ultricies metus varius dignissim. Sed a tincidunt metus."
    },
]
function Home(){
    return (
        <View style={styles.container}>
            <Header text = "Home Page"/>
            <ScrollView style={styles.scrollView}>
                {Tests.map((test) => <QuestionCardView title = {test.title} description = {test.description}/> )}
            </ScrollView>
            <View style={styles.bottomContent}>
                <Text style={{fontSize: 16}}>Get to know your ranking result</Text>
                <Button title="Check!"/>
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
        height: '80%'
    },
    bottomContent: {
        padding: 16,
        backgroundColor: 'lightgray',
        alignItems: 'center',
    },
});
export default Home;