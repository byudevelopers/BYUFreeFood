import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import { styles } from "../Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { SectionList } from "react-native";
const customData = require("../fake_data.json");
var dataSortedByDate = [];

export function ListView() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const buildings = [
    { label: "TNRB", value: "TNRB" },
    { label: "JFSB", value: "JFSB" },
  ];

  function makeListOfDays() {
    let sunday = { title: "Sunday", data: [] };
    let monday = { title: "Monday", data: [] };
    let tuesday = { title: "Tuesday", data: [] };
    let wednesday = { title: "Wednesday", data: [] };
    let thursday = { title: "Thursday", data: [] };
    let friday = { title: "Friday", data: [] };
    let saturday = { title: "Saturday", data: [] };
    dataSortedByDate.push(sunday);
    dataSortedByDate.push(monday);
    dataSortedByDate.push(tuesday);
    dataSortedByDate.push(wednesday);
    dataSortedByDate.push(thursday);
    dataSortedByDate.push(friday);
    dataSortedByDate.push(saturday);
    for (let i = 0; i < customData.length; i++) {
      //console.log(i);
      let date = new Date(customData[i].dateTime);
      //console.log(date.getDay() + " year: " + date.getFullYear());
      //console.log(customData[i].eventName);
      if (date.getDay() == 0) {
        dataSortedByDate[0].data.push(customData[i].eventName);
      } else if (date.getDay() == 1) {
        dataSortedByDate[1].data.push(customData[i].eventName);
      } else if (date.getDay() == 2) {
        dataSortedByDate[2].data.push(customData[i].eventName);
      } else if (date.getDay() == 3) {
        dataSortedByDate[3].data.push(customData[i].eventName);
      } else if (date.getDay() == 4) {
        dataSortedByDate[4].data.push(customData[i].eventName);
      } else if (date.getDay() == 5) {
        console.log("I'm here");
        dataSortedByDate[5].data.push(customData[i].eventName);
      } else if (date.getDay() == 6) {
        dataSortedByDate[6].data.push(customData[i].eventName);
      }
    }
  }
  // console.log("my array " + dataSortedByDate);

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
  makeListOfDays();
  const DATA = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"],
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"],
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"],
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"],
    },
  ];

  //console.log(dataSortedByDate);
  //console.log(DATA);

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={dataSortedByDate}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Item title={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </SafeAreaView>
    // <View></View>
  );
}
