import { Circle, Text } from "native-base";
import React, { FC } from "react";
import { Pressable } from "react-native";
import { useSelector } from "react-redux";
import { RootState } from "redux-store/store";
import { PieceProp } from "utils/interfaces";

interface Props {
  data: PieceProp;
  onPress: () => void;
}

const Piece: FC<Props> = (props) => {
  const { data, onPress } = props;

  const { selectedPiece, availablePieces } = useSelector(
    (state: RootState) => state.game
  );

  const selected = selectedPiece
    ? selectedPiece.side === data.side && selectedPiece.size === data.size
    : false;

  const available = availablePieces[data.side].includes(data.size);

  return (
    <Pressable onPress={onPress}>
      <Circle
        size={10}
        backgroundColor={available ? `${data.side}.500` : `${data.side}.300`}
        borderWidth={2}
        borderColor={selected ? `${data.side}.300` : "secondary.500"}
      >
        <Text color="white">{data.size}</Text>
      </Circle>
    </Pressable>
  );
};

export default Piece;
