import { BoardProp } from "utils/interfaces";

const checkSet = (set: number[], side: string, board: BoardProp) => {
  if (
    [board[set[0]], board[set[1]], board[set[2]]].every(
      (item) => item && item.side === side
    )
  ) {
    return true;
  }
  return false;
};

const checkWin = (board: BoardProp) => {
  const sides = ["red", "blue"];

  for (const side of sides) {
    const winningCombinations = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];

    for (const winningCombination of winningCombinations) {
      const result = checkSet(winningCombination, side, board);
      if (result) {
        return { side, winningCombination };
      }
    }
  }
  return false;
};

export default checkWin;
