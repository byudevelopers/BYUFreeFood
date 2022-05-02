import React, { useState } from "react";
import {
  SectionList,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { Button } from "react-native-elements/dist/buttons/Button";
import { styles } from "../Styles";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/core";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { getFirebaseEvents } from "../EventClient";
import { Cache } from "../cache";
import FirebaseContext from "../FirebaseContext";

const ListStack = createStackNavigator();

function findArrayLocation(date) {
  const today = new Date();
  return date.getDate() - today.getDate();
}

function makeDividers(FirebaseContext) {
  // Add the weekdays twice so that if it is near the end of the week we won't access past the array length.
  // I thought this would be easier than doing maths
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // add the sections with empty data in each secion
  let now = new Date();
  let dataSortedByDate = [];
  let today = { title: "Today", data: [] };
  let tomorrow = { title: "Tomorrow", data: [] };
  let twodays = { title: days[now.getDay() + 2], data: [] };
  let threedays = { title: days[now.getDay() + 3], data: [] };
  let fourdays = { title: days[now.getDay() + 4], data: [] };
  let future = { title: "Later", data: [] };
  dataSortedByDate.push(today);
  dataSortedByDate.push(tomorrow);
  dataSortedByDate.push(twodays);
  dataSortedByDate.push(threedays);
  dataSortedByDate.push(fourdays);
  dataSortedByDate.push(future);

  console.log("---");

  // for each event, check which section the event belongs in
  for (var i = 0; i < FirebaseContext.length; i++) {
    try {
      if (FirebaseContext[i].timeDate === "") {
        // date does not exist in database
        throw "Date does not exist";
      } else {
        // date does exist in database
        var date = FirebaseContext[i].timeDate.toDate();
        if (date != null) {
          let arrayLocation = findArrayLocation(date);
          if (arrayLocation < 0) {
            // is a past event
            // should event be deleted?
          } else if (arrayLocation >= dataSortedByDate.length - 1) {
            // farther future event
            dataSortedByDate[dataSortedByDate.length - 1].data.push(
              FirebaseContext[i]
            );
          } else {
            // date is soon
            dataSortedByDate[arrayLocation].data.push(FirebaseContext[i]);
          }
        }
      }
    } catch (e) {
      console.log(
        "In array at " +
          i +
          ": " +
          e +
          " for the event: " +
          FirebaseContext[i].eventName
      );
    }
  }
  return dataSortedByDate;
}

export function ListView() {
  const navigation = useNavigation();

  return (
    <FirebaseContext.Consumer>
      {(value) => (
        <View style={styles.listContainer}>
          <SectionList
            sections={makeDividers(value)}
            keyExtractor={(item, index) => item + index}
            renderSectionHeader={({ section: { title } }) => (
              <View>
                <Text style={styles.eventListHeader}>{title}</Text>
                <Divider style={styles.listDivider} />
              </View>
            )}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.navigate("EventDetailView", { item })
                }>
                <View>
                  <Text style={styles.eventListItem}>{item.eventName}</Text>
                  <Divider style={styles.listDivider} />
                </View>
              </TouchableWithoutFeedback>
            )}
          />
        </View>
      )}
    </FirebaseContext.Consumer>
  );
}
