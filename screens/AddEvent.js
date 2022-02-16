import React, { useState } from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "../Styles";

export function AddEventView() {
  const [open, setOpen] = useState(false);
  const [eventName, setEventName] = useState("");
  const [clubName, setClubName] = useState("");
  const [timeDate, setTimeDate] = useState("");
  const [building, setBuilding] = useState("");
  const buildings = [
    { label: "TNRB", value: "TNRB" },
    { label: "JFSB", value: "JFSB" },
  ];
  let event = require("../event.js");

  function updateEvent() {
    console.log(event)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create a new event</Text>
      <View style={styles.rowContainer}>
        <Text>Event:</Text>
        <TextInput style={styles.textInput} placeholder="Your event name" onChange={(value) => setEventName(value.nativeEvent.text)}/>
      </View>
      <View style={styles.rowContainer}>
        <Text>Organizer:</Text>
        <TextInput style={styles.textInput} placeholder="Your club/company" onChange={(value) => setClubName(value.nativeEvent.text)}/>
      </View>
      <View style={styles.rowContainer}>
        <Text>Date and Time:</Text>
        <TextInput style={styles.textInput} placeholder="Event time and date" onChange={(value) => setTimeDate(value.nativeEvent.text)}/>
      </View>
      <View style={styles.rowContainer}>
        <Text>Building:</Text>
        <DropDownPicker
          placeholder="Choose one"
          style={styles.dropdown}
          containerStyle={styles.dropdown}
          open={open}
          value={building}
          items={buildings}
          setOpen={setOpen}
          setValue={setBuilding}
        />
      </View>
      <Button
        title="Press me"
        onPress={() => updateEvent()}
      />
    </View>
  );
}
