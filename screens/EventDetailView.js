import React, { useState } from "react";
import { Text, View } from "react-native";
import { styles } from "../Styles";
import { useNavigationParam } from "@react-navigation/native";
import { Divider } from "react-native-elements/dist/divider/Divider";

export function EventDetailView(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const event = props.route.params.item;
  console.log(event);
  return (
    <View style={styles.EventDetailView_infoContainer}>
      <View style={styles.EventDetailView_detailContainer}>
        <Text>Event:</Text>
        <Text>{event.eventName}</Text>
      </View>
      <Divider />
      <View style={styles.EventDetailView_detailContainer}>
        <Text>Club:</Text>
        <Text>{event.clubName}</Text>
      </View>
      <Divider />
      <View style={styles.EventDetailView_detailContainer}>
        <Text>Date Time:</Text>
        <Text>{event.timeDate}</Text>
      </View>
      <Divider />
      <View style={styles.EventDetailView_detailContainer}>
        <Text>Food:</Text>
        <Text>{event.food}</Text>
      </View>
      <Divider />
      <View style={styles.EventDetailView_detailContainer}>
        <Text>Description:</Text>
        <Text>{event.description}</Text>
      </View>
    </View>
  );
}
