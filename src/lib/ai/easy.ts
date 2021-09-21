import { getAvailableMoves } from "lib/board";
import { BoardProp, GameSidesProp, PieceProp } from "utils/interfaces";

const easyAi = (
  side: GameSidesProp,
  pieces: { [key: number]: PieceProp },
  board: BoardProp
) => {
  const moves = getAvailableMoves(board);
  const avaialablePieces = Object.values(pieces).filter(
    (value) => value.side === side && value.available
  );
  return {
    cellId: moves[Math.floor(moves.length * Math.random())],
    piece:
      avaialablePieces[Math.floor(avaialablePieces.length * Math.random())],
  };
};

export default easyAi;
