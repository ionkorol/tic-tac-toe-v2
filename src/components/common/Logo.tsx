import { Box, Heading, HStack, VStack } from "native-base";
import React from "react";

const Logo = () => {
  return (
    <HStack space={3} justifyContent="center">
      <Heading>TIC TAC TOE</Heading>
      <Heading color="primary.500">2.0</Heading>
    </HStack>
  );
};

export default Logo;
