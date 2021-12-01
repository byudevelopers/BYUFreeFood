import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "../Styles";

export function EventDetailView() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const event = navigation.getParam("event");
  return (
    <View style={styles.listContainer}>
      <Text>{event.eventName}</Text>
      <Text>{event.clubName}</Text>
      <Text>{event.dateTime}</Text>
      <Text>{event.food}</Text>
      <Text>{event.description}</Text>
      <Text>{event.dateTime}</Text>
      <Text>
        {event.room} in the {event.building}
      </Text>
    </View>
  );
}
