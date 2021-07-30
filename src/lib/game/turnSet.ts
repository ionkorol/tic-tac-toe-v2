import store from "redux-store/store";
import { TURN_SET } from "redux-store/types";
import { GameSidesProp } from "utils/interfaces";

const turnSet = (side: GameSidesProp) => {
  const { dispatch } = store;
  dispatch({ type: TURN_SET, payload: side });
};

export default turnSet;
