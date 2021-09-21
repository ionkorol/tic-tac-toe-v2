import { Pressable, Text, Circle } from "native-base";
import React, { FC } from "react";
import { cellSet } from "redux-store/slices/gameSlice";
import { useAppDispatch, useAppSelector } from "redux-store/store";

interface Props {
  id: number;
}

const Cell: FC<Props> = (props) => {
  const { id } = props;
  const { winningCombination, selectedPiece, pieces } = useAppSelector(
    (state) => state.game
  );
  const data = useAppSelector((state) => state.game.board[id]);

  const dispatch = useAppDispatch();

  const handlePress = () => {
    if (!selectedPiece) {
      return;
    }

    const selectedPieceData = pieces[selectedPiece];

    // If cell contains same side piece
    if (data && data.side === selectedPieceData.side) return;

    // If cell contains piece with higher value
    if (data && data.value >= selectedPieceData.value) return;

    dispatch(cellSet({ id, data: selectedPieceData }));
  };

  if (!data) {
    return (
      <Pressable
        flex={1}
        border={1}
        borderColor="primary.500"
        p={5}
        onPress={handlePress}
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
      onPress={handlePress}
      backgroundColor={
        winningCombination.includes(Number(id)) ? `${data.side}.500` : undefined
      }
    >
      <Circle borderRadius={50} size={30} bgColor={`${data.side}.500`}>
        <Text color="white">{data.value}</Text>
      </Circle>
    </Pressable>
  );
};

export default Cell;
