import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { IcBack } from "../../../Assets";
// import { IcBack } from "../../../Assets";

type HeaderProps = {
  header: string;
  subHeader: string;
  Onback?: any;
};

const Header = ({ header, subHeader, Onback }: HeaderProps) => {
  return (
    <View style={styles.container}>
      {Onback && (
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.back}>
            <IcBack />
          </View>
        </TouchableOpacity>
      )}

      <View>
        <Text style={styles.title}>{header}</Text>
        <Text style={styles.subTitle}>{subHeader}</Text>
      </View>
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
  back: {
    padding: 16,
    marginRight: 16,
    marginLeft: -10,
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
