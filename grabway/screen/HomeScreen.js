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
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,

      title: "Grabway",
      headerTitleStyle: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#E51B23",
      },
      headerStyle: {
        backgroundColor: "white",
        height: 100,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },

      headerLeft: () => (
        <Image
          source={{ uri: "https://grabway.vercel.app/assets/images/logo.png" }}
          style={{ width: 50, height: 100, resizeMode: "contain" }}
        />
      ),
    });
  }, []);

  const homePlace = {
    description: "Home",
    geometry: { location: { lat: 48.8152937, lng: 2.4597668 } },
  };
  const workPlace = {
    description: "Work",
    geometry: { location: { lat: 48.8496818, lng: 2.2940881 } },
  };
  return (
    <SafeAreaView style={{height:800, flexDirection:'column'}}>
      
      <View style={{ marginTop: 1,alignItems:'center',flex:1}}>
        <Image
          style={{
            
            width: "100%",
            height: 200,
            resizeMode: "contain",
            borderRadius: 20,
          }}
          source={{ uri: "https://i.ibb.co/BCbCjB2/login-Image.jpg" }}
        />
      </View>

      <TouchableOpacity
        style={{
          flex:0.5,
          marginHorizontal: 25,
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
                paddingVertical: 15,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
              },
              container: { flex: 0, marginTop: 15 },
              textInput: {
                fontSize: 18,
                margin: 6,
                height: 60,
                fontWeight: "700",
              },
            }}
            onPress={(data, details = null) => {
              console.log(details);
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

      <View style={{ alignItems: "center", marginTop: 25 , flex:0.4}}>
        <TouchableOpacity
          style={{
            marginHorizontal: 25,
            backgroundColor: "#E51B23",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            borderRadius: 10,
            padding: 10,
          }}
        >
          <Text style={{ flexDirection: "row", color: "white", fontSize: 26 }}>
            Search
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{alignItems:'center', marginTop:25, flex:1.3}}>
      <Image source={{uri:'https://grabway.vercel.app/assets/images/goal.jpg'}}
       style={{
        height:150, width:300,padding:0}}/>
      </View>
      
      {/*
      <ScrollView>
      <View style={{marginHorizontal: 25,marginTop:20,borderRadius:20}}>
      <Card style={{height:300, marginBottom:5 }}>
        <View style={{flexDirection:'column', alignItems:'center',gap:10}}>
        <Image source={{uri:'https://grabway.vercel.app/assets/images/goal.jpg'}} style={{height:150, width:300,padding:0}}/>
          <Txt style={{fontSize:16, textAlign:'center', fontWeight:'700', color:'gray'}}>
            We plan to become India's most trusted platform for shuttle service,providing completely a new dimension to your daily Life
          </Txt>

          <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', gap:4}}>
            <MaterialIcons name="electric-bolt" size={30} color="#E51B23" />
            <Txt style={{fontWeight:'bold', color:'gray'}}>Redefining India's Road Transport</Txt>
            <MaterialIcons name="electric-bolt" size={30} color="#E51B23" />
          </View>
        </View>
        </Card>
      </View>
        
      </ScrollView>
      
      */}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
