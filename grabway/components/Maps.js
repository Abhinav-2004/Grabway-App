import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MapView,{ Marker,AnimatedRegion } from 'react-native-maps';
import * as Location from 'expo-location';
import { useSelector } from 'react-redux';
import { selectCurrentLocation } from '../slices/LocationSlice';

const Maps = () => {
  const currentLocation=useSelector(selectCurrentLocation);;
  const mapRef = useRef(null);
  const [region, setRegion] = useState({
     latitude: currentLocation.latitude,
     longitude: currentLocation.longitude,
     latitudeDelta: 0.0300,
     longitudeDelta: 0.0400,
   });
   
   const onRegionChange=()=>{
   
      mapRef?.current?.animateToRegion({
        latitude:currentLocation.latitude, 
        longitude: currentLocation.longitude,
            latitudeDelta: 0.009,
          longitudeDelta:0.009,
        });
    
     
    
    
  }
  
  return (
    <View style={styles.container}>
    
       <MapView
       
       ref={mapRef}
       onRegionChangeComplete={onRegionChange}
       provider={'google'} // remove if not using Google Maps
       style={styles.map}
       initialRegion={region}
       zoomEnabled={true}
      showsUserLocation={true}
       scrollEnabled={true}
       rotateEnabled={true}
        region={region}

       >

</MapView>
      
  </View>
  )
}

export default Maps

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});