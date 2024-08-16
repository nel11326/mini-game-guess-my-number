import { Text, View, Pressable, StyleSheet } from "react-native";

import Colors from "../constants/colors";

function PrimaryButton({ children, onPress }) {
  const buttonPressed = ({ pressed }) =>
    pressed
      ? [style.ButtonInnerContainer, style.pressed]
      : style.ButtonInnerContainer;

  return (
    <View style={style.ButtonOuterContainer}>
      <Pressable
        style={buttonPressed}
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={style.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const style = StyleSheet.create({
  ButtonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  ButtonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
