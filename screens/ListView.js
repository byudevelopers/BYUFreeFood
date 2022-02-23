import React, { useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import { styles } from "../Styles";
const customData = require("../fake_data.json");
var dataSortedByDate = []

export function ListView() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  
  const buildings = [
    { label: "TNRB", value: "TNRB" },
    { label: "JFSB", value: "JFSB" },
  ];

  function makeListOfDays() {
    let monday = {title:"Monday", events:[]};
    let tuesday = {title:"Tuesday", events:[]};
    let wednesday = {title:"Wednesday", events:[]};
    let thursday = {title:"Thursday", events:[]};
    let friday = {title:"Friday", events:[]};
    let saturday = {title:"Saturday", events:[]};
    let sunday = {title:"Sunday", events:[]};
    dataSortedByDate.push(sunday);
    dataSortedByDate.push(monday);
    dataSortedByDate.push(tuesday);
    dataSortedByDate.push(wednesday);
    dataSortedByDate.push(thursday);
    dataSortedByDate.push(friday);
    dataSortedByDate.push(saturday);

    for (let i = 0; i < customData.length; i++) {
      let date = new Date(customData[i])
      if(date.getDay == 0) {
        dataSortedByDate[0].events.push(customData[i]);
      }
      else if(date.getDay == 1) {
        dataSortedByDate[1].events.push(customData[i]);
      }
      else if(date.getDay == 2) {
        dataSortedByDate[2].events.push(customData[i]);
      }
      else if(date.getDay == 3) {
        dataSortedByDate[3].events.push(customData[i]);
      }
      else if(date.getDay == 4) {
        dataSortedByDate[4].events.push(customData[i]);
      }
      else if(date.getDay == 5) {
        dataSortedByDate[5].events.push(customData[i]);
      }
      else if(date.getDay == 6) {
        dataSortedByDate[6].events.push(customData[i]);
      }
    }

  }

  
  return (
    <SafeAreaView style={styles.container}>
    <SectionList
      sections={customData}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
  );
}
