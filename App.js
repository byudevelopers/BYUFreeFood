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

const AppStack = createStackNavigator();
const HomeTabs = createBottomTabNavigator();

function Home() {
  return (
    <HomeTabs.Navigator>
      <HomeTabs.Screen
        name="List"
        component={ListView}
        options={{ headerShown: false }}
      />
      <HomeTabs.Screen
        name="Map"
        component={MapView}
        options={{ headerShown: false }}
      />
    </HomeTabs.Navigator>
  );
}

function MapView() {
  return <Text>This is the map view</Text>;
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
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
