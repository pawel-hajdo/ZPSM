import 'react-native-gesture-handler';
import React, {useEffect, useState} from "react";
import Home from "./components/screens/Home";
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import TestPage from "./components/screens/TestPage";
import ResultsScreen from "./components/screens/ResultsScreen";
import TestEndScreen from "./components/screens/TestEndScreen";
import SplashScreen from 'react-native-splash-screen'
import WelcomeScreen from "./components/screens/WelcomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import _ from 'lodash';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {

    const [testsData, setTests] = useState([]);

    useEffect(() => {
        getTests();
        setTimeout(()=>{
            SplashScreen.hide();
        },1000)

    }, []);

    const getTests = async () => {
        try{
            const response = await fetch('https://tgryl.pl/quiz/tests');
            const json = await response.json();
            const shuffledTests = _.shuffle(json);
            setTests(shuffledTests);
        }catch (error){
            console.log(error);
        }finally {
            console.log(testsData)
        }
    }

    function HomeStack() {
        return (
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName="WelcomeScreen"
            >
                <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
                <Stack.Screen name="Home Page">{props => <Home {...props} testsData={testsData} />}</Stack.Screen>
            </Stack.Navigator>
        );
    }
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
                        numberOfTasks: test.numberOfTasks
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

    function CustomDrawerContent(props) {
        return (
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
                <DrawerItem
                    label="Download new tests"
                    onPress={getTests}
                />
            </DrawerContentScrollView>
        );
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',

                }}
                drawerContent={props => <CustomDrawerContent {...props} />}
            >
                <Drawer.Screen name="Home" component={HomeStack} />
                <Drawer.Screen
                    name="ResultsScreen"
                    component={ResultsScreen}
                    options={{ title: "Results" }}
                />
                {testsData.length > 0 && (
                    <Drawer.Screen
                        name="Random test"
                        component={TestStack}
                        initialParams={{
                            test: testsData[Math.floor(Math.random() * testsData.length)],
                        }}
                    />
                )}
                <Drawer.Group>
                    {testsData.map((test) => (
                        <Drawer.Screen
                            key={test.id}
                            name={test.name}
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