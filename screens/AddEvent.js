import React, { useState } from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "../Styles";
import { event } from "../event.js"
import { getFirebaseEvents, uploadEvent } from "../EventClient";

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

  function addEvent() {
    event.building = building;
    event.eventName = eventName;
    event.clubName = clubName;
    event.timeDate = timeDate
    console.log(uploadEvent(event))
    console.log(getFirebaseEvents());
  }

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <TextInput style={styles.textInput} placeholder="Your event name"/>
      </View>
      <View style={styles.rowContainer}>
        <TextInput style={styles.textInput} placeholder="Your club/organization" />
      </View>
      <View style={styles.rowContainer}>
        <TextInput style={styles.textInput} placeholder="Food provided" />
      </View>
      <View style={styles.rowContainer}>
        <TextInput style={styles.textInput} placeholder="Description" />
      </View>
    
      
    
    
      <Text style={styles.text}>Date and Time:</Text>
      <TextInput style={styles.textInput} placeholder="Event time and date" />
    
      <Text style={styles.text}>Building:</Text>
      <DropDownPicker
        placeholder="Choose one"
        style={styles.dropdown}
        containerStyle={styles.dropdown}
        open={open}
        value={value}
        items={buildings}
        setOpen={setOpen}
        setValue={setValue}
      />

    </View>
  );
}
