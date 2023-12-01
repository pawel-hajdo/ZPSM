import 'react-native-gesture-handler';
import React from "react";
import Home from "./components/screens/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TestPage from "./components/screens/TestPage";
import ResultsScreen from "./components/screens/ResultsScreen";
import testsData from "./data/TestsData";
import TestEndScreen from "./components/screens/TestEndScreen";

const Drawer = createDrawerNavigator();
const TestsData = testsData;

function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',

                }}>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen
                    name="ResultsScreen"
                    component={ResultsScreen}
                    options={{ title: "Results" }}
                />
                {TestsData.map((test) => (
                    <Drawer.Screen
                        key={test.id}
                        name={test.title}
                        component={TestPage}
                        initialParams={{
                            testId: test.id,
                            testTitle: test.title,
                            testDesc: test.description,
                        }}
                    />
                ))}
                <Drawer.Screen //temporary solution
                    name="TestEndScreen"
                    component={TestEndScreen}
                    options={{ title: "Test End" }}
                    initialParams={{points: 0}}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;