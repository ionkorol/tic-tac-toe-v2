import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import Navigation from "navigation";
import React, { useEffect, useState } from "react";
import { Provider } from "react-redux";
import store from "redux-store/store";
import theme from "utils/theme";
import AppLoading from "expo-app-loading";
import { useFonts, Teko_500Medium } from "@expo-google-fonts/teko";
import * as Admob from "expo-ads-admob";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const [fontsLoaded] = useFonts({ Teko_500Medium });

  useEffect(() => {
    (async () => {
      try {
        const res = await Admob.getPermissionsAsync();
        // console.log(res);
        if (!res.granted && res.canAskAgain) {
          await Admob.requestPermissionsAsync();
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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
