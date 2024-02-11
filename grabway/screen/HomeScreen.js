import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Card, Text as Txt } from "@ui-kitten/components";
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/RouteSlice";
import Maps from "../components/Maps";

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch=useDispatch();
 
  
  const homePlace = {
    description: "Home",
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
  };
  const workPlace = {
    description: "Work",
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
  };
  return (
    <View style={{height:"100%", flexDirection:'column'}}>
       <TouchableOpacity
        style={{
          backgroundColor:'white',
          position:'absolute',
          top:30,
          alignSelf:'center',
          width:"80%",
          zIndex:500,
        
          marginTop: 20,
          borderColor: "#E51B23",
          borderWidth: 2,
          borderRadius: 10,
          paddingHorizontal: 10,
          paddingVertical: 30,
        }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 10,
              gap: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AntDesign name="rightcircle" size={24} color="#E51B23" />
            <Text style={{ fontSize: 20, fontWeight: "900" }}>
              Enter Origin{" "}
            </Text>
          </View>
          <GooglePlacesAutocomplete
          onPress={(data, details = null) => {
            dispatch(setOrigin({
              location:details.geometry.location,
              description:data.description
            }))
            //console.log(data);
            //console.log(details);
  
            dispatch(setDestination(null))
          }}
            styles={{
              listView: {
                borderRadius: 2,
              },
              description: {
                fontSize: 14,
                fontWeight: "400",
              },
              row: {
                borderRadius: 5,
                paddingVertical: 10,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
              },
              container: { backgroundColor:'white',position:'absolute', alignSelf:'center', width:"100%", top:50, marginTop: 15, borderWidth:2, borderRadius:20, borderColor:"gray"},
              textInput: {
                fontSize: 18,
                margin: 4,
                height: 40,
                fontWeight: "700",
              },
            }}
           
            fetchDetails={true} //gets the geocoordinate details
            returnKeyType={"search"}
            enablePoweredByContainer={false}
            minLength={2}
            query={{
              key: "AIzaSyA6gG7wJxAw9oL4sSotlgUOUppuMsmJP4c",
              language: "en",
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400} //aftet 400ms of typing stop, req is made
            placeholder="From Where ?"
          />
        </View>
      </TouchableOpacity>
        <Maps/>

    

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
