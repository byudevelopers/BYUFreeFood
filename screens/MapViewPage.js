import React, { useState } from 'react';
import { View, StyleSheet,Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { styles } from '../Styles';


export function MapViewPage(){

  const [mapRegion, setmapRegion] = useState({
    latitude: 40.249893,
    longitude: -111.649253,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const library =
    {
        coordinate: {
          latitude: 40.248630,
          longitude: -111.649260,
        },
        title: "Harold B. Lee Library",
        description: "This is the library",
        id: 1
    }
  const buildings = [
    {
      coordinate: {
        latitude: 40.248630,
        longitude: -111.649260,
      },
      title: "Harold B. Lee Library",
      description: "This is the library",
      id: 1
  },
  {
    coordinate: {
      latitude: 40.24860898344191,
      longitude: -111.64712412762857,
    },
    title: "Ernest L Wilkinson Student Center",
    abbreviation: "WSC",
    id: 2
},
{
  coordinate: {
    latitude: 40.24763797933712,
    longitude: -111.64938133483894,
  },
  title: "BYU Kennedy Center",
  abbreviation: "Kennedy",
  id: 3
},
{
  coordinate: {
    latitude: 40.246816088382445,
    longitude: -111.64924115281815,
  },
  title: "Thomas L. Martin Building",
  abbreviation: "MARB",
  id: 4
},
{
  coordinate: {
    latitude: 40.247227186630944,
    longitude: -111.6502813960402,
  },
  title: "Eyring Science Center",
  abbreviation: "ESC",
  id: 5
},
{
  coordinate: {
    latitude: 40.24722163859808,
    longitude: -111.65186079752758,
  },
  title: "McKay School of Education",
  abbreviation: "MCKB",
  id: 6
},
{
  coordinate: {
    latitude: 40.24751189071912,
    longitude: -111.6510531090992,
  },
  title: "Spencer W. Kimball Tower",
  abbreviation: "KMBL",
  id: 7
},
{
  coordinate: {
    latitude: 40.24959980519819,
    longitude: -111.65086234547388,
  },
  title: "Talmage Math Sciences/Computer",
  abbreviation: "TMCB",
  id: 8
},
{
  coordinate: {
    latitude: 40.24584530497461,
    longitude: -111.65165552739442,
  },
  title: "Joseph Smith Bldg",
  abbreviation: "JSB",
  id: 9
},
{
  coordinate: {
    latitude: 40.245834245506565,
    longitude: -111.65085646324195,
  },
  title: "Ezra Taft Benson Building",
  abbreviation: "JSB",
  id: 10
},
{
  coordinate: {
    latitude: 40.24690288541101,
    longitude: -111.64808720540961,
  },
  title: "Clyde Engineering Building",
  abbreviation: "Clyde",
  id: 11
},
{
  coordinate: {
    latitude: 40.25021133804402,
    longitude: -111.64993508284903,
  },
  title: "Jesse Knight Building",
  abbreviation: "JKB",
  id: 12
},
{
  coordinate: {
    latitude: 40.248370694995984,
    longitude: -111.6516326904002,
  },
  title: "Josepth F. Smith Building",
  abbreviation: "JFSB",
  id: 13
},
{
  coordinate: {
    latitude: 40.25040929008995,
    longitude: -111.65257351296971,
  },
  title: "N. Eldon Tanner Building",
  abbreviation: "TNRB",
  id: 14
},
{
  coordinate: {
    latitude: 40.24892546946347,
    longitude: -111.64929558545428,
  },
  title: "Harold B. Lee Library",
  abbreviation: "HBLL",
  id: 15
},
{
  coordinate: {
    latitude: 40.24958013904694,
    longitude: -111.6453760804421,
  },
  title: "J. Reuben Clark Law School",
  abbreviation: "JRCB",
  id: 16
},
{
  coordinate: {
    latitude: 40.24738812635119,
    longitude: -111.64533566489625,
  },
  title: "William H. Snell Building",
  abbreviation: "SNLB",
  id: 17
},
{
  coordinate: {
    latitude: 40.24743358138857,
    longitude: -111.64675124780135,
  },
  title: "Crabtree Technology Building",
  abbreviation: "CTB",
  id: 18
},
{
  coordinate: {
    latitude: 40.24910557880143,
    longitude: -111.65358683817594,
  },
  title: "Stephen L. Richards Building",
  abbreviation: "RB",
  id: 19
},
{
  coordinate: {
    latitude: 40.2473906337876,
    longitude: -111.65438015895387,
  },
  title: "Smith Fieldhouse",
  abbreviation: "SFH",
  id: 20
}

  ]

  const haroldblibrary = {
    latitude: 40.248630,
    longitude: -111.649260,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  return (
    <View style={styles.container}>
      <MapView
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={mapRegion}
      >
        <Marker coordinate={library.coordinate} title={library.title} description={library.description}/> 
      </MapView>
    </View>
  );
}
