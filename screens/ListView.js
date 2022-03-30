import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import { styles } from "../Styles";
const customData = require("../fake_data.json");

export function ListView() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={customData}
        renderItem={({ item }) => (
          <View>
            <View style={styles.listDivider} />
            <Text style={styles.eventListItem}>{item.eventName}</Text>
          </View>
        )}
      />
    </View>
  );
}
