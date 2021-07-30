import store from "redux-store/store";
import { PIECE_SELECT } from "redux-store/types";
import { PieceProp } from "utils/interfaces";

const pieceSelect = (piece: PieceProp | null) => {
  const { dispatch } = store;
  dispatch({ type: PIECE_SELECT, payload: piece });
};

export default pieceSelect;
