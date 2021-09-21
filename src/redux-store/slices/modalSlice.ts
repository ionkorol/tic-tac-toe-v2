import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  instructions: boolean;
} = {
  instructions: false,
};

const modalSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    showInstructionsModal: (state, action) => {
      state.instructions = action.payload;
    },
  },
});

export default modalSlice.reducer;

export const { showInstructionsModal } = modalSlice.actions;
