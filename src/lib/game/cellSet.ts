import store from "redux-store/store";
import { BOARD_CELL_SET } from "redux-store/types";
import { PieceProp } from "utils/interfaces";

const cellSet = (cellId: number, piece: PieceProp) => {
  const { dispatch } = store;
  dispatch({ type: BOARD_CELL_SET, payload: { cellId, piece } });
};

export default cellSet;
