import { StyleSheet, Text, View } from "react-native";
import React from "react";

type HeaderProps = {
  header: string;
  subHeader: string;
};

const Header = ({ header, subHeader }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text>{header}</Text>
      <Text>{subHeader}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
    flexDirection: "row",
    alignItems: "center",
  },
});
