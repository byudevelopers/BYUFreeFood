import React, { useState } from "react";
import { StyleSheet, Button, Text, View, Platform } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "../Styles";
import { event } from "../event.js"
import { getFirebaseEvents, uploadEvent } from "../EventClient";
import DateTimePicker from '@react-native-community/datetimepicker';

export function AddEventView() {
  const [open, setOpen] = useState(false);
  const [eventName, setEventName] = useState("");
  const [food, setFood] = useState("");
  const [clubName, setClubName] = useState("");
  const [timeDate, setTimeDate] = useState("");
  const [building, setBuilding] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState('Empty');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    setTimeDate(currentDate.toString())
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    console.log(currentDate.toString())
    let fTime = tempDate.getHours() + ':' + tempDate.getMinutes()
    console.log(fTime)
    setText(fDate + "/n" + fTime)
    console.log("")
    
  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }
  const buildings = [
    { label: "TNRB", value: "TNRB" },
    { label: "JFSB", value: "JFSB" },
  ];

  function addEvent() {
    event.building = building;
    event.eventName = eventName;
    event.clubName = clubName;
    event.timeDate = timeDate;
    event.description = description;
    event.food = food;
    console.log(uploadEvent(event))
    console.log(getFirebaseEvents());
  }

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <TextInput style={styles.textInput} placeholder="Your event name" onChange={(value) => setEventName(value.nativeEvent.text)}/>
      </View>
      <View style={styles.rowContainer}>
        <TextInput style={styles.textInput} placeholder="Your club/organization" onChange={(value) => setClubName(value.nativeEvent.text)} />
      </View>
      <View style={styles.rowContainer}>
        <TextInput style={styles.textInput} placeholder="Food provided" onChange={(value) => setFood(value.nativeEvent.text)}/>
      </View>
      <DropDownPicker
        placeholder="Choose a building"
        containerStyle={styles.dropdown}
        open={open}
        value={building}
        items={buildings}
        setOpen={setOpen}
        setValue={setBuilding}
      />
      <View style={styles.rowContainer}>
        <TextInput 
        multiline={true} 
        numberOfLines={4}
        editable
        maxLength={50}
        style={styles.textBox} 
        placeholder="Description"/>
      </View>
      <View style={styles.rowContainer}>
        <Button title='datePicker' onPress={() => showMode('date')}/>
        
      </View>
      <View>
        <Button 
        style={styles.datePicker} 
        title='timePicker' 
        onPress={() => showMode('time')}/>
        
      </View>
      {show && (
        <DateTimePicker
        testID='dateTimePicker'
        value = {date}
        mode = {mode}
        is24Hour = {false}
        display = 'default'
        onChange={onChange}
        />
      )}
    <View>
      <Button title="submit" onPress={() => addEvent()}></Button>
    </View>
    </View>
  );
}

const UselessTextInputMultiline = () => {
  const [value, onChangeText] = React.useState('Useless Multiline Placeholder');

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <View
      style={{
        backgroundColor: value,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
      }}>
      <UselessTextInput
        multiline
        numberOfLines={4}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={{padding: 10}}
        onChange={(value) => setDescription(value.nativeEvent.text)}
      />
    </View>
  );
}

export default UselessTextInputMultiline;