import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import Navigation from "navigation";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "redux-store/store";
import theme from "utils/theme";
import SplashScreen from "expo-splash-screen";
import { useFonts, Teko_500Medium } from "@expo-google-fonts/teko";

export default function App() {
  const [fontsLoaded] = useFonts({ Teko_500Medium });

  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
