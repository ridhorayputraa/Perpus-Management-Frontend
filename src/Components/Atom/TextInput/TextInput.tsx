import {
  StyleSheet,
  Text,
  TextInput as TextInputComponent,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";


type typeTextInput = {
    label?: string;
    placeholder?: string;
}


const TextInput = ({ label, placeholder }: typeTextInput) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputComponent placeholder={placeholder} style={styles.input} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontFamily: "Poppins-Regular",
    color: "#020202",
    fontSize: 16,
  },
  input: {
    borderColor: "#020202",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontFamily: "Poppins-Light",
  },
});
