import { BoardProp, GameSidesProp, PieceProp } from "utils/interfaces";

const checkDraw = (
  pieces: { [key: number]: PieceProp },
  board: BoardProp,
  turn: GameSidesProp
) => {
  const isBoardFull = Object.values(board).every((value) => value);
  const outOfPieces = Object.values(pieces).every((item) => !item.available);

  const hasMoves = (side: GameSidesProp) => {
    const avaialablePieces = Object.values(pieces).filter(
      (value) => value.side === side && value.available
    );
    const enenmySpots = Object.values(board).filter(
      (value) => value.side !== side
    );
    for (const piece of avaialablePieces) {
      if (enenmySpots.some((spot) => spot.value < piece.value)) {
        return true;
      }
    }
    return false;
  };

  if (outOfPieces || (isBoardFull && !hasMoves(turn))) {
    return true;
  }
  return false;
};

export default checkDraw;
