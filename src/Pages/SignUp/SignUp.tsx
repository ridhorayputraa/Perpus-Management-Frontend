import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Header, TextInput } from "../../Components";

const SignUp = () => {
  return (
    <View style={styles.page}>
      <Header header="Sign Up" Onback subHeader="Register and ear" />
      <View style={styles.container}>
        <TextInput label="Full Name" placeholder="Type your full name" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: "white",
    paddingHorizontal: 24,
    paddingVertical: 26,

    marginVertical: 24,
    flex: 1,
  },
});
