import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
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
import { getFirebaseEvents } from "./EventClient";
import { Cache } from "./cache";

import FirebaseContext from './FirebaseContext';

const AppStack = createStackNavigator();
const HomeTabs = createBottomTabNavigator();

function Home() {
  console.log("updating home");
  return (
    <HomeTabs.Navigator>
      
      <HomeTabs.Screen
        name="List"
        component={ListView}
        options={{ headerShown: false }}

      />
      <HomeTabs.Screen
        name="Map"
        component={MapViewPage}
        options={{ headerShown: false }}

      />
    </HomeTabs.Navigator>
  );
}

function MapView() {
  return MapViewPage;
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
    console.log("creating app");
  }

  setData = (newData) => {
    console.log("setting data");
    this.setState({
      data: newData
    })
  }

  render() {
  return (
    <FirebaseContext.Provider value = {this.state.data}>
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => ({
            headerTitle: "BYUFreeFood",
            headerStyle: styles.headerStyle,
            headerTitleStyle: styles.headerTitleStyle,
            headerRight: () => (
              <Button
                style={styles.headerButton}
                icon={<Icon name="plus" size={24} color="white" />}
                type="clear"
                onPress={() => navigation.navigate("AddEvent")}
              />
            ),
            headerLeft: () => (
              <Button
                style={styles.headerButton}
                icon={<Icon name="refresh" size={24} color="white" />}
                type="clear"
                onPress={() => {Cache.getInstance().getAllEvents(this.setData)}}
              />
            ),
          })}
        />
        <AppStack.Screen
          name="AddEvent"
          component={AddEventView}
          options={{ title: "Add Event" }}
        />
        <AppStack.Screen
          name="EventDetailView"
          component={EventDetailView}
          options={{ title: "Detail View" }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
    </FirebaseContext.Provider>
  );
        }
}
