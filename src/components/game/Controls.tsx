import { Ionicons } from "@expo/vector-icons";
import { HStack, Icon, IconButton } from "native-base";
import React from "react";
import { boardReset } from "redux-store/slices/gameSlice";
import { showInstructionsModal } from "redux-store/slices/modalSlice";
import { useAppDispatch } from "redux-store/store";

const Controls = () => {
  const dispatch = useAppDispatch();
  // const handleSwitchTurn = () => {
  //   boardReset();
  //   turnSet(turn === "blue" ? "red" : "blue");
  // };

  return (
    <HStack justifyContent="space-between" alignItems="center">
      <IconButton
        bgColor="primary.500"
        borderRadius={100}
        icon={<Icon color="white" as={<Ionicons name="refresh" />} />}
        onPress={() => dispatch(boardReset())}
      />
      {/* 
      <Switch
        size="lg"
        offTrackColor="red.300"
        offThumbColor="red.500"
        onTrackColor="blue.300"
        onThumbColor="blue.500"
        isChecked={turn === "blue" ? true : false}
        onToggle={() => handleSwitchTurn()}
      /> */}
      <IconButton
        bgColor="blue.700"
        borderRadius={100}
        color="white"
        icon={<Icon color="white" as={<Ionicons name="information" />} />}
        onPress={() => dispatch(showInstructionsModal(true))}
      />
    </HStack>
  );
};

export default Controls;
