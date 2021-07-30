import store from "redux-store/store";
import { GameSidesProp } from "utils/interfaces";
import winnerSet from "./winnerSet";

const checkDraw = () => {
  const { availablePieces, board } = store.getState().game;
  const isBoardFull = Object.values(board).every((value) => value);
  const outOfPieces =
    availablePieces.blue.length === 0 && availablePieces.red.length === 0;

  const hasMoves = (side: GameSidesProp) => {
    const enenmySpots = Object.values(board).filter(
      (value) => value.side !== side
    );
    for (const piece of availablePieces[side]) {
      if (enenmySpots.some((spot) => spot.size < piece)) {
        return true;
      }
    }
    return false;
  };

  if (outOfPieces || (isBoardFull && !hasMoves("red") && !hasMoves("blue"))) {
    winnerSet("draw");
  }
};

export default checkDraw;
