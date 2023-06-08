import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Gaptypes = {
  height?: string | number;
  width?: string | number;
};

const Gap = ({ height, width }: Gaptypes) => {
  return <View style={{ height: height, width: width }} />;
};

export default Gap;

const styles = StyleSheet.create({});
