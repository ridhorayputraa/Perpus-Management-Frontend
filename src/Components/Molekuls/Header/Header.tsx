import { StyleSheet, Text, View } from "react-native";
import React from "react";

type HeaderProps = {
  header: string;
  subHeader: string;
};

const Header = ({ header, subHeader }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{header}</Text>
      <Text style={styles.subTitle}>{subHeader}</Text>
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
    flexDirection: "column",
    // alignItems: "center",
  },
  title: {
    color: "#020202",
    fontSize: 22,
    fontFamily: "Poppins-Medium",
  },
  subTitle: {
    fontFamily: "Poppins-Light",
    color: " #8D92A3",
    fontSize: 14,
  },
});
