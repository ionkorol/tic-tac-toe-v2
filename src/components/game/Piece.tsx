import { Circle, Text } from "native-base";
import React, { FC } from "react";
import { Pressable } from "react-native";
import { selectedPieceSet } from "redux-store/slices/gameSlice";
import { useAppDispatch, useAppSelector } from "redux-store/store";
import { PieceProp } from "utils/interfaces";

interface Props {
  data: PieceProp;
}

const Piece: FC<Props> = (props) => {
  const { data } = props;

  const { selectedPiece, winner, turn } = useAppSelector((state) => state.game);
  const dispatch = useAppDispatch();
  const selected =
    selectedPiece !== null && selectedPiece === data.id ? true : false;

  const handlePiecePress = () => {
    // If game over can't press
    if (winner) return;
    // Out of turn can't press
    if (data.side !== turn) return;
    // If used can't press
    if (!data.available) return;

    dispatch(selectedPieceSet(data.id));
  };

  return (
    <Pressable onPress={handlePiecePress}>
      <Circle
        size={10}
        backgroundColor={
          data.available ? `${data.side}.500` : `${data.side}.300`
        }
        borderWidth={2}
        borderColor={selected ? `${data.side}.300` : "secondary.500"}
      >
        <Text color="white">{data.value}</Text>
      </Circle>
    </Pressable>
  );
};

export default Piece;
