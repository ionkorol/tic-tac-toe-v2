import { MODAL_SHOW_INSTRUCTIONS } from "redux-store/types";

const initialState: {
  instructions: boolean;
} = {
  instructions: false,
};

export default (
  state = initialState,
  { type, payload }: { type: typeof MODAL_SHOW_INSTRUCTIONS; payload: boolean }
) => {
  // console.log(type, payload);
  switch (type) {
    case MODAL_SHOW_INSTRUCTIONS:
      return {
        ...state,
        instructions: payload,
      };

    default:
      return state;
  }
};
