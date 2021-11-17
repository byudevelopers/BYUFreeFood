import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { styles } from "../Styles";
const customData = require("../fake_data.json");

export function ListView() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const buildings = [
    { label: "TNRB", value: "TNRB" },
    { label: "JFSB", value: "JFSB" },
  ];
  return (
    <View style={styles.container}>
      <Text>This is our super cool list view!!!</Text>
      <FlatList
        data={customData}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.eventName}</Text>
        )}
      />
    </View>
  );
}
