import store from "redux-store/store";
import { BOARD_RESET } from "redux-store/types";

const boardReset = () => {
  const { dispatch } = store;
  dispatch({ type: BOARD_RESET, payload: null });
};

export default boardReset;
