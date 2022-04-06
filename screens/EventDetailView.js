import React, { useState } from "react";
import { Text, View, Button, StyleSheet, Pressable } from "react-native";
import { styles } from "../Styles";
import { useNavigationParam } from "@react-navigation/native";
import { Divider } from "react-native-elements/dist/divider/Divider";


const styless = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginEnd: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});


export function EventDetailView(props) {
  const [isSaved, setIsSaved] = useState("🤍");

  const event = props.route.params.item;
  console.log(event);
  
  const eventName = event.eventName;

  props.navigation.setOptions({
    headerTitle: eventName,
    headerRight: () => (
      <Pressable
        style={styless.button}
        onPress={() => {
          if (isSaved == "💙") {
            setIsSaved("🤍");
            alert('Saving an event still needs to be implemented');
          } else {
            setIsSaved("💙");
          }

        }}
      >
        <Text>{isSaved}</Text>
      </Pressable>
    ),
  });

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
        <Text>{event.dateTime}</Text>
        <Text>
          {event.locationRoom} in the {event.locationBuilding}
        </Text>
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
