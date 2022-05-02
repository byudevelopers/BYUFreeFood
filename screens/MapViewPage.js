import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { BottomSheet } from "react-native-btr";
import { SocialIcon } from "react-native-elements";
import MapView, { Marker } from "react-native-maps";
import { styles } from "../Styles";
import FirebaseContext from "../FirebaseContext";
import { buildings } from "../buildings";
import { Cache } from "../cache";

let cache = Cache.getInstance();
let events = cache.events;
let buildingsMap = new Map([]);

console.log("Testing logs:");

function setUpBuildingsData() {
  try {
    for (var i in events) {
      let event = events[i];
      if (buildingsMap[event.building]) {
        console.log("Building that exists: " + buildingsMap[event.building]);
        buildingsMap[event.building].data.push(event);
      } else {
        try {
          console.log("Should save to " + event.building);
          let mapEvent = {
            coordinate: getCoordinate(event.building),
            data: [],
          };
          console.log("Map event: " + mapEvent);
          mapEvent.data.push(event);
          buildingsMap[event.building] = mapEvent;
          console.log("Building: " + event.building);
        } catch (e) {
          // building does not exist
          // this should never happen unless the event was added manually to the database
          console.log("That building does not exist");
        }
      }
    }
  } catch (e) {
    console.log("error: " + e);
  }
}

function getCoordinate(buildingName) {
  try {
    for (var i in buildings) {
      var building = buildings[i];
      if (building.abbreviation == buildingName) {
        return building.coordinate;
      }
    }
  } catch (e) {
    console.log("Error: " + e);
  }
  return null;
}

setUpBuildingsData();

export function MapViewPage() {
  const [mapRegion, setmapRegion] = useState({
    latitude: 40.249893,
    longitude: -111.649253,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  function toggleBottomSheetView() {
    setBottomSheetVisible(!bottomSheetVisible);
  }

  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <FirebaseContext.Consumer>
      {(data) => (
        <View style={styles.container}>
          <MapView
            style={{ alignSelf: "stretch", height: "100%" }}
            region={mapRegion}
            showsUserLocation={true}
            onMarkerSelect={(event) => {
              console.log(event.id);
              if (!bottomSheetVisible) {
                toggleBottomSheetView();
              }
            }}>
            {
              events
                ? events.map((event) => (
                    <Marker
                      onSelect={() => setSelectedEvent(event)}
                      coordinate={getCoordinate(event.building)}
                      title={event.title}>
                      <View style={styles.mapMarker}>
                        <Text style={styles.markerText}>
                          {buildingsMap[event.building].data.length}
                        </Text>
                      </View>
                    </Marker>
                  ))
                : null
              // buildings
              //   ? buildings.map((building) => (
              //       <Marker
              //         onSelect={() => setSelectedBuilding(building)}
              //         coordinate={building.coordinate}
              //         title={building.title}
              //         description={building.abbreviation}></Marker>
              //     ))
              //   : null
            }
          </MapView>
          <BottomSheet
            visible={bottomSheetVisible}
            //setting the visibility state of the bottom shee
            onBackButtonPress={toggleBottomSheetView}
            //Toggling the visibility state on the click of the back botton
            onBackdropPress={toggleBottomSheetView}
            //Toggling the visibility state on the clicking out side of the sheet
          >
            {/*Bottom Sheet inner View*/}
            <View style={mapStyles.bottomNavigationView}>
              <Text>{selectedBuilding ? selectedBuilding.title : ""}</Text>
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}>
                <Text
                  style={{
                    textAlign: "center",
                    padding: 20,
                    fontSize: 20,
                  }}>
                  Share Using
                </Text>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <SocialIcon
                    //Social Icon using react-native-elements
                    type="twitter"
                    //Type of Social Icon
                    onPress={() => {
                      //Action to perform on press of Social Icon
                      toggleBottomSheetView();
                      alert("twitter");
                    }}
                  />
                  <SocialIcon
                    type="gitlab"
                    onPress={() => {
                      toggleBottomSheetView();
                      alert("gitlab");
                    }}
                  />
                  <SocialIcon
                    type="medium"
                    onPress={() => {
                      toggleBottomSheetView();
                      alert("medium");
                    }}
                  />
                  <SocialIcon
                    type="facebook"
                    onPress={() => {
                      toggleBottomSheetView();
                      alert("facebook");
                    }}
                  />
                  <SocialIcon
                    type="instagram"
                    onPress={() => {
                      toggleBottomSheetView();
                      alert("instagram");
                    }}
                  />
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <SocialIcon
                    type="facebook"
                    onPress={() => {
                      toggleBottomSheetView();
                      alert("facebook");
                    }}
                  />
                  <SocialIcon
                    type="instagram"
                    onPress={() => {
                      toggleBottomSheetView();
                      alert("instagram");
                    }}
                  />
                  <SocialIcon
                    type="gitlab"
                    onPress={() => {
                      toggleBottomSheetView();
                      alert("gitlab");
                    }}
                  />
                  <SocialIcon
                    type="twitter"
                    onPress={() => {
                      toggleBottomSheetView();
                      alert("twitter");
                    }}
                  />
                  <SocialIcon
                    type="medium"
                    onPress={() => {
                      toggleBottomSheetView();
                      alert("medium");
                    }}
                  />
                </View>
              </View>
            </View>
          </BottomSheet>
        </View>
      )}
    </FirebaseContext.Consumer>
  );
}

const mapStyles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E0F7FA",
  },
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },
});
