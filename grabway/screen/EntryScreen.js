import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Location from 'expo-location';
import { useDispatch } from 'react-redux';
import { setCurrentLocation } from '../slices/LocationSlice';
const EntryScreen = () => {
    const navigation=useNavigation();
    const route=useRoute();
    const dispatch=useDispatch();
    const [location,setLocation]=useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
          const region={
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0300,
            longitudeDelta: 0.0400,
          }
          dispatch(setCurrentLocation(
            region
          ))
          if(route.name=='Entry'){
            navigation.navigate('Landing');
          }
        })();
      },[]);
    
      let text = 'Waiting..';
      if (errorMsg) {
        text = errorMsg;
      } else if (location) {
        text = JSON.stringify(location);
      }
     
  return (
    <SafeAreaView style={{height:"100%", width:"100%", flexDirection:"column", justifyContent:'center'}}>
        <Image
        style={{height:65, width:72, alignSelf:'center'}}
        source={{uri:"https://grabway.vercel.app/assets/images/logo.png"}}/>
        <Text style={{
            textAlign:'center',
            fontSize:30,
            fontWeight:'900',
    }}>Grabway</Text>
    </SafeAreaView>
  )
}

export default EntryScreen

const styles = StyleSheet.create({})