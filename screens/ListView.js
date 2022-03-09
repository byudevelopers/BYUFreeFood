import React, { useState } from "react";
import { FlatList, Text, View, TouchableWithoutFeedback } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import { styles } from "../Styles";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/core";
import { Divider } from "react-native-elements/dist/divider/Divider"; 
import { getFirebaseEvents } from "../EventClient";
import { Cache } from "../cache";

//const customData = require("../fake_data.json");
const ListStack = createStackNavigator();
//const [customData, setCustomData] = useState({});


export function ListView() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [customData, setCustomData] = useState({});

  const buildings = [
    { label: "TNRB", value: "TNRB" },
    { label: "JFSB", value: "JFSB" },
  ];
  const navigation = useNavigation();
  Cache.getInstance().getAllEvents(setCustomData);

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={customData}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("EventDetailView", { item })}>
            <View>
              
              <Text style={styles.eventListItem}>{item.eventName}</Text>
              <Divider style={styles.listDivider}/>
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
}
