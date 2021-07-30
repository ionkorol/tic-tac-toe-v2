import { Box } from "native-base";
import React from "react";

import { SafeAreaView, StatusBar, View } from "react-native";

const Layout = ({ children }: { children: any }) => {
  return (
    <Box flex={1} bgColor="secondary.500">
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Box>{children}</Box>
      </SafeAreaView>
    </Box>
  );
};

export default Layout;
