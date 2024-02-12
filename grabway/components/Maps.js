import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MapView,{ Marker,AnimatedRegion } from 'react-native-maps';
import * as Location from 'expo-location';

const Maps = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const mapRef = useRef(null);
  const [region, setRegion] = useState({
     latitude: 20.296059,
     longitude: 85.824539,
     latitudeDelta: 0.0300,
     longitudeDelta: 0.0400,
   });
   
   const onRegionChange=()=>{
   
      mapRef?.current?.animateToRegion({
        latitude:location.coords.latitude, 
        longitude: location.coords.longitude,
            latitudeDelta: 0.009,
          longitudeDelta:0.009,
        });
    
     
    
    
  }
  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setRegion({
        latitude: location.coords.latitude,
       longitude: location.coords.longitude,
      latitudeDelta: 0.0300,
      longitudeDelta: 0.0400,
      })
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
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