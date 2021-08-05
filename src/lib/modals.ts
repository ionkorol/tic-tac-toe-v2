import store from "redux-store/store";
import { MODAL_SHOW_INSTRUCTIONS } from "redux-store/types";

export const modalsShowInstructions = (show: boolean) => {
  const { dispatch } = store;
  dispatch({ type: MODAL_SHOW_INSTRUCTIONS, payload: show });
};
