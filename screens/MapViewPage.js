import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { BottomSheet } from 'react-native-btr';
import { SocialIcon } from 'react-native-elements';
import MapView, { Marker } from 'react-native-maps';
import { styles } from '../Styles';
import { buildings } from '../buildings';


export function MapViewPage() {

  const [mapRegion, setmapRegion] = useState({
    latitude: 40.249893,
    longitude: -111.649253,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const [buildings] = useState([
    {
      coordinate: {
        latitude: 40.248630,
        longitude: -111.649260,
      },
      title: "Harold B. Lee Library",
      abbreviation: "HBLL",
    },
    {
      coordinate: {
        latitude: 40.24860898344191,
        longitude: -111.64712412762857,
      },
      title: "Ernest L Wilkinson Student Center",
      abbreviation: "WSC",
    },
    {
      coordinate: {
        latitude: 40.24763797933712,
        longitude: -111.64938133483894,
      },
      title: "BYU Kennedy Center",
      abbreviation: "HRGB",
    },
    {
      coordinate: {
        latitude: 40.246816088382445,
        longitude: -111.64924115281815,
      },
      title: "Thomas L. Martin Building",
      abbreviation: "MARB",
    },
    {
      coordinate: {
        latitude: 40.247227186630944,
        longitude: -111.6502813960402,
      },
      title: "Eyring Science Center",
      abbreviation: "ESC",
    },
    {
      coordinate: {
        latitude: 40.24722163859808,
        longitude: -111.65186079752758,
      },
      title: "McKay School of Education",
      abbreviation: "MCKB",
    },
    {
      coordinate: {
        latitude: 40.24751189071912,
        longitude: -111.6510531090992,
      },
      title: "Spencer W. Kimball Tower",
      abbreviation: "KMBL",
    },
    {
      coordinate: {
        latitude: 40.24959980519819,
        longitude: -111.65086234547388,
      },
      title: "Talmage Math Sciences/Computer",
      abbreviation: "TMCB",
    },
    {
      coordinate: {
        latitude: 40.24584530497461,
        longitude: -111.65165552739442,
      },
      title: "Joseph Smith Bldg",
      abbreviation: "JSB",
    },
    {
      coordinate: {
        latitude: 40.245834245506565,
        longitude: -111.65085646324195,
      },
      title: "Ezra Taft Benson Building",
      abbreviation: "BNSN",
    },
    {
      coordinate: {
        latitude: 40.24690288541101,
        longitude: -111.64808720540961,
      },
      title: "Clyde Engineering Building",
      abbreviation: "CB",
    },
    {
      coordinate: {
        latitude: 40.25021133804402,
        longitude: -111.64993508284903,
      },
      title: "Jesse Knight Building",
      abbreviation: "JKB",
    },
    {
      coordinate: {
        latitude: 40.248370694995984,
        longitude: -111.6516326904002,
      },
      title: "Josepth F. Smith Building",
      abbreviation: "JFSB",
    },
    {
      coordinate: {
        latitude: 40.25040929008995,
        longitude: -111.65257351296971,
      },
      title: "N. Eldon Tanner Building",
      abbreviation: "TNRB",
    },
    {
      coordinate: {
        latitude: 40.24958013904694,
        longitude: -111.6453760804421,
      },
      title: "J. Reuben Clark Law School",
      abbreviation: "JRCB",
    },
    {
      coordinate: {
        latitude: 40.24738812635119,
        longitude: -111.64533566489625,
      },
      title: "William H. Snell Building",
      abbreviation: "SNLB",
    },
    {
      coordinate: {
        latitude: 40.24743358138857,
        longitude: -111.64675124780135,
      },
      title: "Crabtree Technology Building",
      abbreviation: "CTB",
    },
    {
      coordinate: {
        latitude: 40.24910557880143,
        longitude: -111.65358683817594,
      },
      title: "Stephen L. Richards Building",
      abbreviation: "RB",
    },
    {
      coordinate: {
        latitude: 40.2473906337876,
        longitude: -111.65438015895387,
      },
      title: "Smith Fieldhouse",
      abbreviation: "SFH",
    },
    {
      coordinate: {
        latitude: 40.250813,
        longitude: -111.649387
      },
      title: "Abraham O. Smoot Administration Building",
      abbreviation: "BNSN",
    }
  ]);

  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  function toggleBottomSheetView() {
    setBottomSheetVisible(!bottomSheetVisible);
  };

  const [selectedBuilding, setSelectedBuilding] = useState({title: "",});

  console.log("Testing logs!");
  return (
    <View style={styles.container}>
      <MapView
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={mapRegion}
        showsUserLocation={true}
        onMarkerSelect={(event) => {
          console.log(event.id);
          if (!bottomSheetVisible) {
            toggleBottomSheetView();
          }
        }}
      >

        {buildings ? buildings.map((building) => (

          <Marker onSelect={() => setSelectedBuilding(building)} coordinate={building.coordinate} title={building.title} description={building.abbreviation}>

          </Marker>

        ))
          : null}


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
            <Text>{selectedBuilding.title}</Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  padding: 20,
                  fontSize: 20,
                }}>
                Share Using
              </Text>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <SocialIcon
                  //Social Icon using react-native-elements
                  type="twitter"
                  //Type of Social Icon
                  onPress={() => {
                    //Action to perform on press of Social Icon
                    toggleBottomSheetView();
                    alert('twitter');
                  }}
                />
                <SocialIcon
                  type="gitlab"
                  onPress={() => {
                    toggleBottomSheetView();
                    alert('gitlab');
                  }}
                />
                <SocialIcon
                  type="medium"
                  onPress={() => {
                    toggleBottomSheetView();
                    alert('medium');
                  }}
                />
                <SocialIcon
                  type="facebook"
                  onPress={() => {
                    toggleBottomSheetView();
                    alert('facebook');
                  }}
                />
                <SocialIcon
                  type="instagram"
                  onPress={() => {
                    toggleBottomSheetView();
                    alert('instagram');
                  }}
                />
              </View>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <SocialIcon
                  type="facebook"
                  onPress={() => {
                    toggleBottomSheetView();
                    alert('facebook');
                  }}
                />
                <SocialIcon
                  type="instagram"
                  onPress={() => {
                    toggleBottomSheetView();
                    alert('instagram');
                  }}
                />
                <SocialIcon
                  type="gitlab"
                  onPress={() => {
                    toggleBottomSheetView();
                    alert('gitlab');
                  }}
                />
                <SocialIcon
                  type="twitter"
                  onPress={() => {
                    toggleBottomSheetView();
                    alert('twitter');
                  }}
                />
                <SocialIcon
                  type="medium"
                  onPress={() => {
                    toggleBottomSheetView();
                    alert('medium');
                  }}
                />
              </View>
            </View>
          </View>
        </BottomSheet>
    </View>
  );
}

const mapStyles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
  },
  bottomNavigationView: {
    backgroundColor: '#fff',
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
});