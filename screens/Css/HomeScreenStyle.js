import { StyleSheet } from "react-native";
import images from "../../assets/images.json";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 100,
  },
  image: { width: 200, height: 200, marginBottom: 40 },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },

  text: {
    fontWeight: "light",
    fontSize: 16,
    color: images.colors.black.mediumBlack,
  },
  textForgotPassword: {
    fontSize: 16,
    color: images.colors.red.solidRed,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    width: "80%",
  },
  button: {
    backgroundColor: "#FC4C4C",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    justifyContent: "center",
    alignItems: "center",
    color: images.colors.black.lightBlack,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#FC4C4C",
    padding: 10,
    height: 40,
    width: "80%",
    borderRadius: 10,
    marginTop: 10,
  },
});
