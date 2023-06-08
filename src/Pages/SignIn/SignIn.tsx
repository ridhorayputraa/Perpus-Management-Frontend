import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Gap, Header, TextInput } from "../../Components";

const SignIn = () => {
  return (
    <View style={styles.page}>
      <Header header="Sign In" subHeader="Find you best ever meal" />
      {/* <Text>SignIn</Text>
      <TextInput /> */}
      <View style={styles.container}>
        <Text>foskofkso</Text>
        <Button text="Sign In" />
        <Gap height={16}/>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: "white",
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
