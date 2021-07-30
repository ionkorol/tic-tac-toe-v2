import { FontAwesome5 } from "@expo/vector-icons";
import { Pressable, Text, Circle, Icon } from "native-base";
import React, { FC, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux-store/store";
import { PieceProp } from "utils/interfaces";

interface Props {
  id: number;
  onPress: () => void;
}

const Cell: FC<Props> = (props) => {
  const { id, onPress } = props;
  const { board, winningCombination } = useSelector(
    (state: RootState) => state.game
  );

  const data = board[id] as PieceProp | null;

  if (!data) {
    return (
      <Pressable
        flex={1}
        border={1}
        borderColor="primary.500"
        p={5}
        onPress={onPress}
        borderRadius={10}
      >
        <Circle size={30} />
      </Pressable>
    );
  }

  return (
    <Pressable
      flex={1}
      position="relative"
      justifyContent="center"
      alignItems="center"
      border={1}
      borderColor="primary.500"
      borderRadius={10}
      p={5}
      onPress={onPress}
      backgroundColor={
        winningCombination && winningCombination.includes(id)
          ? `${data.side}.500`
          : undefined
      }
    >
      <Circle size={30} bgColor={`${data.side}.500`}>
        <Text color="white">{data.size}</Text>
      </Circle>
    </Pressable>
  );
};

export default Cell;
