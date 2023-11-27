import React from "react";
import Home from "./components/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet} from "react-native";
import TestPage from "./components/TestPage";

const Stack = createNativeStackNavigator();
function App (){
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="TestPage" component={TestPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default App;