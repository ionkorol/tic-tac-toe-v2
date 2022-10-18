import { Box } from "native-base";
import React from "react";

import { SafeAreaView, StatusBar, View, LayoutAnimation } from "react-native";
import { adUnitID } from "utils/AdMob";

const Layout = ({ children }: { children: any }) => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

  return (
    <Box flex={1} bgColor="secondary.500">
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Box flex={1}>{children}</Box>
      </SafeAreaView>
    </Box>
  );
};

export default Layout;
