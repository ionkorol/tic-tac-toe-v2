import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import Navigation from "navigation";
import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "redux-store/store";
import theme from "utils/theme";
import AppLoading from "expo-app-loading";
import { useFonts, Teko_500Medium } from "@expo-google-fonts/teko";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded] = useFonts({ Teko_500Medium });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

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
