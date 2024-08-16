import { View, Text, StyleSheet, SafeAreaView } from "react-native";

import Title from "../components/Title";
function GameScreen() {
  return (
    <View style={style.screen}>
      <Title>Opponent's Guess</Title>
      {/* Guess */}
      <View>
        <Text>Higher or Lower</Text>
        {/* +- */}
        {/* <View>Log Rounds</View> */}
      </View>
    </View>
  );
}

export default GameScreen;

const style = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
