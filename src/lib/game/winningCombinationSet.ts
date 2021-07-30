import store from "redux-store/store";
import { WINNING_COMBINATION_SET } from "redux-store/types";

const winningCombinationSet = (combination: number[]) => {
  const { dispatch } = store;
  dispatch({ type: WINNING_COMBINATION_SET, payload: combination });
};

export default winningCombinationSet;
