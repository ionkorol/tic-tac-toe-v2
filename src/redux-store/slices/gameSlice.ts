import { createSlice } from "@reduxjs/toolkit";
import { BoardProp, PieceProp, GameSidesProp } from "utils/interfaces";

const initialState: {
  winner: "blue" | "red" | "draw" | null;
  board: BoardProp;
  winningCombination: number[];
  pieces: { [key: number]: PieceProp };

  selectedPiece: number | null;
  turn: GameSidesProp;
} = {
  winner: null,
  winningCombination: [],
  board: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
  },
  pieces: {
    1: { id: 1, value: 1, available: true, side: "blue" },
    2: { id: 2, value: 1, available: true, side: "blue" },
    3: { id: 3, value: 2, available: true, side: "blue" },
    4: { id: 4, value: 2, available: true, side: "blue" },
    5: { id: 5, value: 3, available: true, side: "blue" },
    6: { id: 6, value: 3, available: true, side: "blue" },

    7: { id: 7, value: 1, available: true, side: "red" },
    8: { id: 8, value: 1, available: true, side: "red" },
    9: { id: 9, value: 2, available: true, side: "red" },
    10: { id: 10, value: 2, available: true, side: "red" },
    11: { id: 11, value: 3, available: true, side: "red" },
    12: { id: 12, value: 3, available: true, side: "red" },
  },
  selectedPiece: null,
  turn: "blue",
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    winnerSet: (state, { payload }) => {
      state.winner = payload;
    },
    cellSet: (state, { payload }) => {
      // Set cell value of piece
      state.board[payload.id] = payload.data;

      // Make piece unavailable
      state.pieces[payload.data.id] = {
        ...state.pieces[payload.data.id],
        available: false,
      };

      // Switch turn
      state.turn = state.turn === "blue" ? "red" : "blue";

      // Clear selected piece
      state.selectedPiece = null;
    },
    boardReset: (state) => {
      return initialState;
    },
    selectedPieceSet: (state, { payload }) => {
      state.selectedPiece = payload;
    },

    winningCombinationSet: (state, { payload }) => {
      state.winningCombination = payload;
    },
  },
});

export default gameSlice.reducer;
export const {
  cellSet,
  boardReset,
  selectedPieceSet,
  winnerSet,
  winningCombinationSet,
} = gameSlice.actions;
