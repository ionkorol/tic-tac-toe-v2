import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { GameScreen } from "screens";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Game" component={GameScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
