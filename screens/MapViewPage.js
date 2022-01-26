import React, { useState } from 'react';
import { View, StyleSheet,Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { styles } from '../Styles';
import { buildings } from '../buildings';


export function MapViewPage(){

  const [mapRegion, setmapRegion] = useState({
    latitude: 40.249893,
    longitude: -111.649253,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const buildingsArray = Object.values(buildings);
  var markers = buildingsArray.map(location => (
    <MapView.Marker coordinate={location.coordinate} title={location.title} description={location.abbreviation}/> 
  ));

  return (
    <View style={styles.container}>
      <MapView
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={mapRegion}
      >
        {markers}
      </MapView>
    </View>
  );
}
