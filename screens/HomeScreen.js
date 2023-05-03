import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";

import styles from "./Css/HomeScreenStyle";
import images from "../assets/images.json";

import { useNavigation } from "@react-navigation/native";
function HomeScreen() {
  const navigation = useNavigation();

  function onPressFunction() {
    navigation.navigate("Drawer");
  }

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Welcome Back</Text>
        <Image
          source={{ uri: images.images.homeScreenItalianChef }}
          style={styles.image}
        />

        <TextInput style={styles.input} placeholder="Enter your name" />
        <Pressable
          onPress={onPressFunction}
          android_ripple={{ color: "#ccc" }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>
        <Text style={styles.textForgotPassword}>Forgot password?</Text>
      </ScrollView>
    </>
  );
}

export default HomeScreen;
