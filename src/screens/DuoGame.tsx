import { Layout, Logo } from "components/common";
import {
  Cell,
  Controls,
  InstructionModal,
  Piece,
  ResultModal,
} from "components/game";
import { checkDraw, checkWin } from "lib/game";

import { FlatList, HStack, VStack } from "native-base";
import React, { useEffect } from "react";
import { winnerSet, winningCombinationSet } from "redux-store/slices/gameSlice";
import { useAppDispatch, useAppSelector } from "redux-store/store";

const DuoGame = () => {
  const { pieces, turn, board } = useAppSelector((state) => state.game);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const draw = checkDraw(pieces, board, turn);
    const win = checkWin(board);

    if (draw) {
      dispatch(winnerSet("draw"));
    } else if (win) {
      dispatch(winnerSet(win.side));
      dispatch(winningCombinationSet(win.winningCombination));
    }
  }, [board]);

  return (
    <Layout>
      <VStack flex={1} space={5} p={5} justifyContent="space-between">
        <Logo />
        <VStack space={5}>
          <HStack
            justifyContent="space-between"
            alignItems="center"
            borderColor={turn === "blue" ? "blue.500" : "secondary.500"}
            borderRadius={10}
            borderWidth={1}
            px={5}
            height={20}
          >
            {Object.entries(pieces)
              .filter(([key, value]) => value.side === "blue")
              .map(([key, value]) => (
                <Piece data={value} key={value.id} />
              ))}
          </HStack>
          <FlatList
            data={Object.keys(board)}
            renderItem={({ item }) => <Cell id={item} />}
            keyExtractor={(item) => item}
            numColumns={3}
            contentContainerStyle={{
              flexGrow: 1,
              justifyContent: "center",
            }}
            columnWrapperStyle={{
              justifyContent: "space-between",
            }}
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
            {Object.entries(pieces)
              .filter(([key, value]) => value.side === "red")
              .map(([key, value]) => (
                <Piece data={value} key={value.id} />
              ))}
          </HStack>
        </VStack>
        <Controls />
      </VStack>
      <ResultModal />
      <InstructionModal />
    </Layout>
  );
};

export default DuoGame;
