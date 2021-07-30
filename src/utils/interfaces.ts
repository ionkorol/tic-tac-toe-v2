export interface BoardProp {
  [key: number]: null | PieceProp;
}

export interface PieceProp {
  side: "red" | "blue";
  size: number;
}

export type GameSidesProp = "red" | "blue";
