import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const MapScreen = () => {
    console.log('hello');
  return (
    <SafeAreaView style={{flexDirection:'column', gap:30, marginTop:50, marginHorizontal:20}}>
      <Text>
        Seacrh Destination Box here
      </Text>
      <Text>Show Trending Routes from that location by fetching from mongo</Text>
      <Text>
        Show favorites in down 
      </Text>
    </SafeAreaView>
  )
}

export default MapScreen

const styles = StyleSheet.create({})