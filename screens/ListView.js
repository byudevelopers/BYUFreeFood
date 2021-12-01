import React, { useState } from "react";
import { FlatList, Text, View, TouchableWithoutFeedback } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import { styles } from "../Styles";
import { NavigationContainer } from "@react-navigation/native";
const customData = require("../fake_data.json");

export function ListView() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const buildings = [
    { label: "TNRB", value: "TNRB" },
    { label: "JFSB", value: "JFSB" },
  ];
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={customData}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback onPress={() => console.log("hi")}>
            <View>
              <View style={styles.listDivider} />
              <Text style={styles.eventListItem}>{item.eventName}</Text>
            </View>
          </TouchableWithoutFeedback>
        )}
      />
    </View>
  );
}
