import 'react-native-gesture-handler';
import React, {useEffect} from "react";
import Home from "./components/screens/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import TestPage from "./components/screens/TestPage";
import ResultsScreen from "./components/screens/ResultsScreen";
import testsData from "./data/TestsData";
import TestEndScreen from "./components/screens/TestEndScreen";
import SplashScreen from 'react-native-splash-screen'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const TestsData = testsData;

function TestStack({route}){
    const {test} = route.params;

    return (
        <Stack.Navigator
        screenOptions={{headerShown: false}}>
            <Stack.Screen
                key={`${test.id}_Page`}
                name={`${test.title}_Page`}
                component={TestPage}
                initialParams={{
                    testId: test.id,
                    testTitle: test.title,
                    testDesc: test.description,
                }}
            />
            <Stack.Screen
                key={`TestEndScreen_${test.id}`}
                name="TestEndScreen"
                component={TestEndScreen}
                //options={{ title: "Test End" }}
                initialParams={{points: 0}}
            />
        </Stack.Navigator>
    );
}
function App() {

    useEffect(() => {
        SplashScreen.hide();
    }, []);
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
                <Drawer.Group>
                    {TestsData.map((test) => (
                        <Drawer.Screen
                            key={test.id}
                            name={test.title}
                            component={TestStack}
                            initialParams={{
                                test: test,
                            }}
                        />
                    ))}
                </Drawer.Group>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;