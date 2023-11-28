import 'react-native-gesture-handler';
import React from "react";
import Home from "./components/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TestPage from "./components/TestPage";
import ResultsScreen from "./components/ResultsScreen";

const Drawer = createDrawerNavigator();
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
                {Tests.map((test) => (
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
                <Drawer.Screen name="TestPage" component={TestPage}
                               options={({
                                        route}) => ({title: route.params?.testTitle,
                                        drawerStyle: { display: 'none' }
                                   })
                               }/>
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

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

export default App;