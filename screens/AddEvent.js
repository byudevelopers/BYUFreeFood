
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from '../Styles';
import { buildings } from "../buildings.js"

export function AddEventView() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Create a new event</Text>
        <View style={styles.rowContainer}>
          <Text>Event:</Text>
          <TextInput style={styles.textInput} placeholder="Your event name"/>
        </View>
        <View style={styles.rowContainer}>
          <Text>Organizer:</Text>
          <TextInput style={styles.textInput} placeholder="Your club/company"/>
        </View>
        <View style={styles.rowContainer}>
          <Text>Date and Time:</Text>
          <TextInput style={styles.textInput} placeholder="Event time and date"/>
        </View>
        <View style={styles.rowContainer}>
          <Text>Building:</Text>
          <DropDownPicker
            placeholder="Choose one"
            style={styles.dropdown}
            containerStyle={styles.dropdown}
            open={open}
            value={value}
            items={buildings}
            setOpen={setOpen}
            setValue={setValue}/>
        </View>
      </View>
    )
  }