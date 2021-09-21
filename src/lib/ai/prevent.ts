import { getAvailableMoves } from "lib/board";
import { checkDraw, checkWin } from "lib/game";
import { BoardProp, GameSidesProp, PieceProp } from "utils/interfaces";

const prevent = (
  board: BoardProp,
  pieces: { [key: number]: PieceProp },
  side: GameSidesProp,
  depth: number
) => {
  // If depth is even than its the max side
  const isMax = !(depth % 2);

  // Check if game is complete
  if (checkDraw(pieces, board, side)) return 0;
  const win = checkWin(board);
  if (win) {
    if (isMax && win.side === side) {
      return 20 - depth;
    } else if (!isMax && win.side !== side) {
      return 20 - depth;
    } else {
      return depth - 20;
    }
  }

  let avaialablePieces = Object.values(pieces).filter(
    (value) => value.side === side && value.available
  );
  const maxAvailableValue = Math.max(
    ...avaialablePieces.map((item) => item.value)
  );

  let availableEmptyMoves = getAvailableMoves(board);
  let availableTakeOverMoves = Object.keys(board)
    .map((key) => Number(key))
    .filter((key) => {
      const boardValue = board[key];
      boardValue && boardValue.value < maxAvailableValue;
    });

  if (isMax) {
    let best = -100;
    for (const availableEmptyMove of availableEmptyMoves) {
      for (const avaialablePiece of avaialablePieces) {
        const nextBoard = { ...board, [availableEmptyMove]: avaialablePiece };
        const nextAvaialablePieces = pieces;
        delete nextAvaialablePieces[avaialablePiece.id];
        const nextTurn = side === "blue" ? "red" : "blue";

        best = Math.max(
          best,
          prevent(nextBoard, nextAvaialablePieces, nextTurn, depth + 1)
        );
      }
    }
    return best;
  } else {
    let best = 100;
    for (const availableEmptyMove of availableEmptyMoves) {
      for (const avaialablePiece of avaialablePieces) {
        const nextBoard = { ...board, [availableEmptyMove]: avaialablePiece };
        const nextAvaialablePieces = pieces;
        delete nextAvaialablePieces[avaialablePiece.id];
        const nextTurn = side === "blue" ? "red" : "blue";

        best = Math.max(
          best,
          prevent(nextBoard, nextAvaialablePieces, nextTurn, depth + 1)
        );
      }
    }
    return best;
  }
};

export const getHardMove = (
  side: GameSidesProp,
  pieces: { [key: number]: PieceProp },
  board: BoardProp
) => {
  let avaialablePieces = Object.values(pieces).filter(
    (value) => value.side === side && value.available
  );

  const maxAvailableValue = Math.max(
    ...avaialablePieces.map((item) => item.value)
  );

  let availableEmptyMoves = getAvailableMoves(board);
  let availableTakeOverMoves = Object.keys(board)
    .map((key) => Number(key))
    .filter((key) => {
      const boardValue = board[key];
      boardValue && boardValue.value < maxAvailableValue;
    });

  let value = -99;
  let returnMove;

  for (const availableEmptyMove of availableEmptyMoves) {
    for (const avaialablePiece of avaialablePieces) {
      const minMaxValue = prevent(board, pieces, side, 0);
      if (value < minMaxValue) {
        value = minMaxValue;
        returnMove = { cellId: availableEmptyMove, piece: avaialablePiece };
      }
      console.log(minMaxValue, {
        cellId: availableEmptyMove,
        piece: avaialablePiece,
      });
      console.log("\n");
    }
  }
  return (
    returnMove || { cellId: availableEmptyMoves[0], piece: avaialablePieces[0] }
  );
};
