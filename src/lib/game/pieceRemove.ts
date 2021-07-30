import store from "redux-store/store";
import { PIECE_REMOVE } from "redux-store/types";
import { GameSidesProp, PieceProp } from "utils/interfaces";

const pieceRemove = (piece: PieceProp) => {
  const { dispatch } = store;
  dispatch({ type: PIECE_REMOVE, payload: piece });
};

export default pieceRemove;
