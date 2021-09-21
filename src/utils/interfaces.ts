export interface BoardProp {
  [key: number]: null | PieceProp;
}

export interface PieceProp {
  id: number;
  value: number;
  available: boolean;
  side: GameSidesProp;
}

export type GameSidesProp = "red" | "blue";
