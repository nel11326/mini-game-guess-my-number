import { Text, View, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  function pressHandler() {}

  const buttonPressed = ({ pressed }) =>
    pressed
      ? [style.ButtonInnerContainer, style.pressed]
      : style.ButtonInnerContainer;
  return (
    <View style={style.ButtonOuterContainer}>
      <Pressable
        style={buttonPressed}
        onPress={pressHandler}
        android_ripple={{ color: "#640233" }}
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
    backgroundColor: "#72063c",
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
