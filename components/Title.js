import { StyleSheet, Text } from "react-native";

import Colors from "../constants/colors";

function Title({ children }) {
  return <Text style={style.title}>{children}</Text>;
}

export default Title;

const style = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
  },
});
