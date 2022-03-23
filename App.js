import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { styles } from "./Styles";
import { AddEventView } from "./screens/AddEvent";
import { ListView } from "./screens/ListView";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { EventDetailView } from "./screens/EventDetailView";
import { MapViewPage } from "./screens/MapViewPage";

const AppStack = createStackNavigator();
const HomeTabs = createBottomTabNavigator();

function Home() {
    return (
        <HomeTabs.Navigator
            // tabBarOptions was all that was needed to be added to the navigator component to make the icons have active tinting
            tabBarOptions={{
                activeTintColor: 'blue', // maybe change this color, the blue is a little annoying on the eyes
            }}
        >
            <HomeTabs.Screen
                name="List"
                component={ListView}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Icon name="list" color={color} size={28} />
                    )
                }}
            />
            <HomeTabs.Screen
                name="Map"
                component={MapViewPage}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <Icon name="map" color={color} size={28} />
                    ),
                }}
            />
        </HomeTabs.Navigator>
    );
}

function MapView() {
    return MapViewPage;
}

export default function App() {
    return (
        <NavigationContainer>
            <AppStack.Navigator>
                <AppStack.Screen
                    name="Home"
                    component={Home}
                    options={({ navigation }) => ({
                        headerTitle: "BYUFreeFood",
                        headerRight: () => (
                            <Button
                                style={styles.headerButton}
                                icon={<Icon name="plus" size={24} color="blue" />}
                                type="clear"
                                onPress={() => navigation.navigate("AddEvent")}
                            />
                        ),
                    })}
                />
                <AppStack.Screen name="AddEvent" component={AddEventView} />
                <AppStack.Screen name="EventDetailView" component={EventDetailView} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}