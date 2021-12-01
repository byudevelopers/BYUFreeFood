import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "../Styles";
const customData = require("../fake_data.json");

export function EventDetailView() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const buildings = [
    { label: "TNRB", value: "TNRB" },
    { label: "JFSB", value: "JFSB" },
  ];
  return (
    <View style={styles.listContainer}>
      <Text>Detail view here</Text>
    </View>
  );
}
