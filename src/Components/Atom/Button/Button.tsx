import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button as ButtonComponnt,
} from "react-native";
import React from "react";

type typeButton = {
  text: string;
  colorButton?: string;
  textColor?: string;
  onPress?: any;
};

const Button = ({
  text,
  colorButton = "#FFC700",
  textColor = "#020202",
  onPress,
}: typeButton) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={[styles.container, { backgroundColor: colorButton }]}>
        <Text style={[styles.text, { color: textColor }]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 8,
    // backgroundColor: "#010101",
  },

  text: {
    textAlign: "center",
    fontFamily: "Poppins-Medium",
    fontSize: 14,
  },
});
