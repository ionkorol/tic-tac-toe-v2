import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { DuoGameScreen, SoloGameScreen } from "screens";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="DuoGame"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="DuoGame" component={DuoGameScreen} />
      <Stack.Screen name="SoloGame" component={SoloGameScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
