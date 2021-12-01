
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Button } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { styles } from '../Styles';
import { Pressable } from 'react-native';

export function AddEventView({ navigation }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const buildings = [
      {label: 'TNRB', value: 'TNRB'},
      {label: 'JFSB', value: 'JFSB'}
    ]
    return (
      <View style={addEventStyles.page}>
        <TextInput style={[addEventStyles.textInput, addEventStyles.text]} placeholder="Title"/>
        <TextInput style={[addEventStyles.textInput, addEventStyles.text]} placeholder="Organizer"/>
        <TextInput style={[addEventStyles.textInput, addEventStyles.text]} placeholder="Food"/>
        <Pressable style={addEventStyles.locationButton} onPress={() => {
          navigation.navigate("Location");
        }}><Text style={addEventStyles.text}>Location</Text></Pressable>
        <TextInput
          multiline={true}
          placeholder="Description"
          style={[addEventStyles.textInput, addEventStyles.text, addEventStyles.descriptionTextBox]}/>
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

  const addEventStyles = StyleSheet.create({
    page: {
      display: "flex",
      backgroundColor: "#fff",
      height: "100%"
    },
    textInput: {
      borderBottomWidth: 1,
      padding: 8
    },
    locationButton: {
      borderBottomWidth: 1,
      borderBottomColor: "#000",
      padding: 8  
    },
    text: {
      fontSize: 18
    },
    descriptionTextBox: {
      height: "10%",
    }
  });