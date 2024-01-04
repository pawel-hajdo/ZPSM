import 'react-native-gesture-handler';
import React, {useEffect, useState} from "react";
import Home from "./components/screens/Home";
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import TestPage from "./components/screens/TestPage";
import ResultsScreen from "./components/screens/ResultsScreen";
import TestEndScreen from "./components/screens/TestEndScreen";
import SplashScreen from 'react-native-splash-screen'
import WelcomeScreen from "./components/screens/WelcomeScreen";
import _ from 'lodash';
import {getTestsFromApi} from "./components/ApiManager";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {

    const [testsData, setTests] = useState([]);
    const [haveInternetConnection, setInternetConnection] = useState(false);

    useEffect(() => {
        // const test = async () => {
        //     await getTests().then(() => console.log("aa",testsData));
        //     //console.log(testsData);
        // }
        // test();
        getTests()
            .then(()=>{SplashScreen.hide()})
    }, []);



    const getTests = async () => {
        if (haveInternetConnection) {
            try {
                const jsonTests = await getTestsFromApi();
                const shuffledTests = _.shuffle(jsonTests);
                setTests(shuffledTests);
                await saveTestsToAsyncStorage(JSON.stringify(shuffledTests));
            } catch (error) {
                console.error(error);
            }
        } else {
            try{
                // const jsonTests = await getTestsFromAsyncStorage();
                // const shuffledTests = _.shuffle(jsonTests);
                // console.log(shuffledTests);
                // setTests(shuffledTests);

                await getTestsFromAsyncStorage()
                    .then(console.log)
                    .then(_.shuffle)
                    .then(setTests)
                    .then(() => console.log("hook",testsData));

                // const tests = await getTestsFromAsyncStorage();
                // console.log("2",tests);
                // setTests(tests);
                console.log("hook2",testsData);
            }catch (error){
                console.log(error);
            }
        }
    }

    const saveTestsToAsyncStorage = async (jsonTests) => {
        await AsyncStorage.setItem("Tests", JSON.stringify(jsonTests));
    }

    const saveTestsDetailsToAsyncStorage = async (testId, jsonTestDetails) => {
        await AsyncStorage.setItem(testId, jsonTestDetails);
    }

    const getTestsFromAsyncStorage = async () => {
        try {
            const testsString = await AsyncStorage.getItem("Tests");
            console.log(testsString);
            return await JSON.parse(testsString);
        } catch (error) {
            console.error(error);
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