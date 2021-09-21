import { getAvailableMoves } from "lib/board";
import { checkDraw, checkWin } from "lib/game";
import { BoardProp, GameSidesProp, PieceProp } from "utils/interfaces";

const minMax = (
  side: GameSidesProp,
  pieces: { [key: number]: PieceProp },
  board: BoardProp,
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

    for (const avaialableMove of [
      ...availableTakeOverMoves,
      ...availableEmptyMoves,
    ]) {
      const boardValue = board[avaialableMove];
      const activePiece = boardValue
        ? getLowestTakeOverPiece(boardValue.value, avaialablePieces)
        : getLowestValuePiece(avaialablePieces);

      const nextTurn = side === "blue" ? "red" : "blue";
      const nextPieces = pieces;
      delete nextPieces[activePiece.id];
      const nextBoard = { ...board, [avaialableMove]: activePiece };

      const minMaxValue = minMax(nextTurn, nextPieces, nextBoard, depth + 1);
      best = Math.max(best, minMaxValue);
    }
    return best;
  } else {
    let best = 100;

    for (const avaialableMove of [
      ...availableTakeOverMoves,
      ...availableEmptyMoves,
    ]) {
      const boardValue = board[avaialableMove];
      const activePiece = boardValue
        ? getLowestTakeOverPiece(boardValue.value, avaialablePieces)
        : getLowestValuePiece(avaialablePieces);

      const nextTurn = side === "blue" ? "red" : "blue";
      const nextPieces = pieces;
      delete nextPieces[activePiece.id];
      const nextBoard = { ...board, [avaialableMove]: activePiece };

      const minMaxValue = minMax(nextTurn, nextPieces, nextBoard, depth + 1);
      best = Math.min(best, minMaxValue);
    }
    return best;
  }
};

const getLowestTakeOverPiece = (value: number, pieces: PieceProp[]) => {
  let returnPiece = pieces[0];
  for (const piece of pieces) {
    if (piece.value > value && piece.value < returnPiece.value) {
      returnPiece = piece;
    }
  }
  return returnPiece;
};

const getLowestValuePiece = (pieces: PieceProp[]) => {
  let returnPiece = pieces[0];
  for (const piece of pieces) {
    if (piece.value < returnPiece.value) {
      returnPiece = piece;
    }
  }
  return returnPiece;
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

  for (const avaialableMove of [
    ...availableTakeOverMoves,
    ...availableEmptyMoves,
  ]) {
    const boardValue = board[avaialableMove];
    const activePiece = boardValue
      ? getLowestTakeOverPiece(boardValue.value, avaialablePieces)
      : getLowestValuePiece(avaialablePieces);

    const minMaxValue = minMax(side, pieces, board, 0);
    if (value < minMaxValue) {
      value = minMaxValue;
      returnMove = { cellId: avaialableMove, piece: activePiece };
    }
    console.log(minMaxValue, { cellId: avaialableMove, piece: activePiece });
    console.log("\n");
  }
  return returnMove;
};

export default getHardMove;
