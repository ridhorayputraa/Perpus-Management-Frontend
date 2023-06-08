import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { View, Text } from "react-native";
import React from "react";
import { SignIn, SignUp } from "../Pages";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="signIn"
        options={{ headerShown: false }}
        component={SignIn}
      />
      <Stack.Screen
        name="SignUp"
        options={{ headerShown: false }}
        component={SignUp}
      />
    </Stack.Navigator>
  );
};

export default Router;
