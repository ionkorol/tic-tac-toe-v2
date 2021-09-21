import { BoardProp } from "utils/interfaces";

const getAvailableMoves = (board: BoardProp) => {
  return Object.keys(board)
    .map((item) => Number(item))
    .filter((key) => !board[key]);
};

export default getAvailableMoves;
