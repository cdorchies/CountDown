import { StyleSheet, Dimensions } from "react-native";

let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: ScreenHeight,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  bloc1: {},
  bloc2: {
    flex: 1,
    height: null,
    width: null,
  },
  text: {
    textTransform: "uppercase",
    color: "#fff",
    fontSize: 70,
    textAlign: "center",
  },
  span: {
    fontSize: 25,
  },
  textRed: {
    color: "#DC0B08",
    textTransform: "uppercase",
    fontSize: 70,
    textAlign: "center",
  },
  logo: {
    marginTop: 60,
    marginBottom: 60,
    width: 250,
    height: 150,
  },
});

export default styles;
