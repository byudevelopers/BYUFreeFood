import React, { useState } from 'react';
import { View, StyleSheet,Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { styles } from '../Styles';
import { buildings } from '../buildings';
import FirebaseContext from "../FirebaseContext";


export function MapViewPage(){

  const [mapRegion, setmapRegion] = useState({
    latitude: 40.249893,
    longitude: -111.649253,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  return (
    <View style={styles.container}>
      <MapView
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={mapRegion}
        showsUserLocation={true}
      >
        {buildings ? buildings.map((building) => (
          <Marker coordinate={building.coordinate} title={building.title} description={building.key}>

          </Marker>
        ))
        : null}
      </MapView>
    </View>
  );
}
