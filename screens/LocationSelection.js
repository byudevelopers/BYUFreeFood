import React, {useState} from "react"
import { Text, View, Pressable, StyleSheet, TextInput } from "react-native"

const buildings = ["TNRB", "WILK"];

export default function LocationSelection() {
  const [selected, setSelected] = useState("TNRB");
  return (
    <View>
      <View>{
        buildings.map(building => {
          return (
            <Pressable key={building}
              style={[
                locationSelectionStyles.buildingButton,
                selected == building ? locationSelectionStyles.selected : ''
              ]}
              onPress={() => setSelected(building)}
            >
              <Text style={locationSelectionStyles.buildingButtonText}>{building}</Text>
            </Pressable>
          )
        })
      }</View>
      <TextInput
        multiline={true}
        placeholder="Room Number/Description of Location"
        style={locationSelectionStyles.description}/>
    </View>
  )
}

const locationSelectionStyles = StyleSheet.create({
  buildingButton: {
    backgroundColor: "#FFF",
    borderColor: "#777",
    borderWidth: 1,
    padding: 8
  },
  buildingButtonText: {
    fontSize: 18
  },
  selected: {
    backgroundColor: "#DDF"
  },
  description: {
    marginTop: 8,
    fontSize: 18,
    height: 64,
    backgroundColor: "#FFF",
    borderColor: "#777",
    borderWidth: 1,
    padding: 8
  }
})