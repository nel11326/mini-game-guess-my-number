import { StyleSheet, Text, Platform } from "react-native";

function Title({ children }) {
  return <Text style={style.title}>{children}</Text>;
}

export default Title;

const style = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    borderWidth: Platform.select({ android: 2, ios: 0 }),
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
