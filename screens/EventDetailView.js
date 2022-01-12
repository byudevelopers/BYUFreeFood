import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "../Styles";
import { useNavigationParam } from "@react-navigation/native";

export function EventDetailView(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const event = props.route.params.item;
  console.log(event);
  return (
    <View style={styles.listContainer}>
      <Text>{event.eventName}</Text>
      <Text>{event.clubName}</Text>
      <Text>{event.dateTime}</Text>
      <Text>{event.food}</Text>
      <Text>{event.description}</Text>
      <Text>{event.dateTime}</Text>
      <Text>
        {event.location.room} in the {event.location.building}
      </Text>
    </View>
    // <View>
    //   <Text>Test 1,2</Text>
    // </View>
  );
}
