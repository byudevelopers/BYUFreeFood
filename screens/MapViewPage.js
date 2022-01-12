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
      latitude: 40.248630,
      longitude: -111.649260,
    },
    title: "Harold B. Lee Library",
    description: "This is the library",
    id: 1
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
