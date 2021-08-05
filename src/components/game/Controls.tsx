import { Ionicons } from "@expo/vector-icons";
import { boardReset, turnSet } from "lib/game";
import { modalsShowInstructions } from "lib/modals";
import { HStack, Icon, IconButton, Switch } from "native-base";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux-store/store";

const Controls = () => {
  const { turn } = useSelector((state: RootState) => state.game);
  const handleSwitchTurn = () => {
    boardReset();
    turnSet(turn === "blue" ? "red" : "blue");
  };

  return (
    <HStack justifyContent="space-between" alignItems="center">
      <IconButton
        bgColor="primary.500"
        borderRadius={100}
        icon={<Icon color="white" as={<Ionicons name="refresh" />} />}
        onPress={boardReset}
      />

      <Switch
        size="lg"
        offTrackColor="red.300"
        offThumbColor="red.500"
        onTrackColor="blue.300"
        onThumbColor="blue.500"
        isChecked={turn === "blue" ? true : false}
        onToggle={() => handleSwitchTurn()}
      />
      <IconButton
        bgColor="blue.700"
        borderRadius={100}
        color="white"
        icon={<Icon color="white" as={<Ionicons name="information" />} />}
        onPress={() => modalsShowInstructions(true)}
      />
    </HStack>
  );
};

export default Controls;
