import { Box } from "native-base";
import React from "react";
import { AdMobBanner } from "expo-ads-admob";

import { SafeAreaView, StatusBar, View, LayoutAnimation } from "react-native";
import { adUnitID } from "utils/AdMob";

const Layout = ({ children }: { children: any }) => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

  return (
    <Box flex={1} bgColor="secondary.500">
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Box flex={1}>{children}</Box>
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID={adUnitID} // Test ID, Replace with your-admob-unit-id
          servePersonalizedAds
        />
      </SafeAreaView>
    </Box>
  );
};

export default Layout;
