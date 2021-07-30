import {
  PIECE_REMOVE,
  BOARD_CELL_SET,
  BOARD_RESET,
  PIECE_SELECT,
  WINNER_SET,
  TURN_SET,
  WINNING_COMBINATION_SET,
} from "redux-store/types";
import { BoardProp, GameSidesProp, PieceProp } from "utils/interfaces";

const initialState: {
  winner: "blue" | "red" | "draw" | null;
  board: BoardProp;
  winningCombination: number[] | null;
  availablePieces: { red: number[]; blue: number[] };
  selectedPiece: PieceProp | null;
  turn: GameSidesProp;
} = {
  winner: null,
  winningCombination: null,
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
  availablePieces: {
    red: [1, 2, 3, 4, 5, 6],
    blue: [1, 2, 3, 4, 5, 6],
  },
  selectedPiece: null,
  turn: "blue",
};

export default (
  state = initialState,
  { type, payload }: { type: string; payload: any }
) => {
  // console.log(type, payload);
  switch (type) {
    case WINNER_SET:
      return {
        ...state,
        winner: payload,
      };

    case BOARD_CELL_SET:
      return {
        ...state,
        board: {
          ...state.board,
          [payload.cellId]: payload.piece,
        },
      };

    case BOARD_RESET:
      return {
        ...initialState,
        turn: state.turn,
      };

    case PIECE_REMOVE:
      return {
        ...state,
        availablePieces: {
          ...state.availablePieces,
          [payload.side]: state.availablePieces[
            payload.side as "red" | "blue"
          ].filter((item) => item !== payload.size),
        },
      };

    case PIECE_SELECT:
      return {
        ...state,
        selectedPiece: payload,
      };

    case TURN_SET:
      return {
        ...state,
        turn: payload,
      };

    case WINNING_COMBINATION_SET:
      return {
        ...state,
        winningCombination: payload,
      };

    default:
      return state;
  }
};
