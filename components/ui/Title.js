import { StyleSheet, Text } from "react-native";

function Title({ children }) {
  return <Text style={style.title}>{children}</Text>;
}

export default Title;

const style = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
  },
});
