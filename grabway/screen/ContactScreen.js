import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome6";

const ContactScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const animatedValue = useRef(new Animated.Value(0)).current;
  const [buttonScale] = useState(
    animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1.1],
    })
  );

  const handleSend = () => {
    console.log("name ", name);
    console.log("email ", email);
    console.log("message ", message);
  };
  useEffect(() => {
    animateButton();
  }, []);

  const animateButton = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(animatedValue, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://grabway.vercel.app/assets/images/logo.png" }}
        style={{ width: 100, height: 100, resizeMode: "contain" }}
      />
      <Text style={styles.title}>Contact Us</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.messageInput}
          placeholder="Your Solution is just one Click Away !"
          multiline={true}
          numberOfLines={4}
          onChangeText={(text) => setMessage(text)}
        />
        <Animated.View
          style={[
            styles.buttonContainer,
            { transform: [{ scale: buttonScale }] },
          ]}
        >
          <TouchableOpacity style={styles.button} onPress={handleSend}>
            <Text style={styles.buttonText}>Send Message</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
      <View style={styles.iconContainer}>
        <Icon name="facebook" size={30} color="#900" />
        <Icon name="github" size={30} color="#900" />
        <Icon name="discord" size={30} color="#900" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  form: {
    width: "100%",
  },
  input: {
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  messageInput: {
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    height: 100,
    textAlignVertical: "top",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
    marginTop: "20%",
  },
});

export default ContactScreen;
