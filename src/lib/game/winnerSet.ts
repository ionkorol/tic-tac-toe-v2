import store from "redux-store/store";
import { WINNER_SET } from "redux-store/types";

const winnerSet = (side: "blue" | "red" | "draw" | null) => {
  const { dispatch } = store;
  dispatch({ type: WINNER_SET, payload: side });
};

export default winnerSet;
