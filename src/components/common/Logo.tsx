import { Box, Heading, VStack } from "native-base";
import React from "react";

const Logo = () => {
  return (
    <VStack alignItems="center">
      <Box height={30}>
        <Heading>TIC TAC TOE</Heading>
      </Box>
      <Heading color="primary.500">REMASTERED</Heading>
    </VStack>
  );
};

export default Logo;
