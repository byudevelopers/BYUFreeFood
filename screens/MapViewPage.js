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

  let markers = this.state.buildings.map(building => (
    <MapView.Marker
      coordinate={building.coordinate}
      title={building.title}
      description={building.abbreviation}
    />
  ));

  var location = buildings["HBLL"];

  return (
    <View style={styles.container}>
      <MapView
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={mapRegion}
      >
        <Marker coordinate={location.coordinate} title={location.title} description={location.abbreviation}/> 
        {markers}
      </MapView>
    </View>
  );
}
