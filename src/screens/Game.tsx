import { Layout, Logo } from "components/common";
import { Cell, Controls, Piece, ResultModal } from "components/game";
import {
  cellSet,
  checkDraw,
  checkWin,
  pieceRemove,
  pieceSelect,
  turnSet,
} from "lib/game";
import { FlatList, HStack, VStack } from "native-base";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux-store/store";
import { PieceProp } from "utils/interfaces";

const Game = () => {
  const { winner, availablePieces, selectedPiece, turn, board } = useSelector(
    (state: RootState) => state.game
  );

  const handlePiecePress = (pieceData: PieceProp) => {
    // If game over can't press
    if (winner) {
      return;
    }

    // Out of turn can't press
    if (pieceData.side !== turn) {
      return;
    }

    // If used can't press
    if (!availablePieces[pieceData.side].includes(pieceData.size)) {
      return;
    }

    pieceSelect(pieceData);
  };

  const handleCellPress = (item: number) => {
    if (!selectedPiece) {
      return;
    }

    const cellData = board[item];

    if (cellData && cellData.side === selectedPiece.side) {
      return;
    }
    if (cellData && cellData.size >= selectedPiece.size) {
      return;
    }
    cellSet(item, selectedPiece);

    // Remove used piece
    pieceRemove(selectedPiece);

    pieceSelect(null);
  };

  useEffect(() => {
    if (Object.values(board).some((item) => item)) {
      turnSet(turn === "red" ? "blue" : "red");
    }
    checkDraw();
    checkWin();
  }, [board]);

  return (
    <Layout>
      <VStack space={5} p={5} justifyContent="center">
        <Logo />
        <HStack
          justifyContent="space-between"
          alignItems="center"
          borderColor={turn === "blue" ? "blue.500" : "secondary.500"}
          borderRadius={10}
          borderWidth={1}
          px={5}
          height={20}
        >
          {[1, 2, 3, 4, 5, 6].map((size) => (
            <Piece
              data={{ side: "blue", size }}
              onPress={() => handlePiecePress({ side: "blue", size })}
              key={size}
            />
          ))}
        </HStack>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          renderItem={({ item }) => (
            <Cell id={item} onPress={() => handleCellPress(item)} />
          )}
          keyExtractor={(item) => item}
          numColumns={3}
        />
        <HStack
          p={5}
          justifyContent="space-between"
          alignItems="center"
          borderColor={turn === "red" ? "red.500" : "secondary.500"}
          borderRadius={10}
          borderWidth={1}
          px={5}
          height={20}
        >
          {[1, 2, 3, 4, 5, 6].map((size) => (
            <Piece
              data={{ side: "red", size }}
              onPress={() => handlePiecePress({ side: "red", size })}
              key={size}
            />
          ))}
        </HStack>
        <Controls />
      </VStack>
      <ResultModal />
    </Layout>
  );
};

export default Game;
