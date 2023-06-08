import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TextInput = () => {
  return (
    <View style={styles.container}>
      <Text>TextInput</Text>
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#FFC700",
  },
});
