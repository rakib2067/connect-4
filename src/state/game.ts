import { boardCols } from "const";
import { atom } from "recoil";
import { Board, Player } from "types";

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: any, _: any, isReset: any) => {
      isReset
        ? localStorage.removeItem(key)
        : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const boardState = atom<Board>({
  key: "boardState",
  default: Array(boardCols).fill([]),
  effects: [localStorageEffect("boardState")],
});

export const playerState = atom<Player>({
  key: "playerState",
  default: 1,
  effects: [localStorageEffect("playerState")],
});

export const gameOverState = atom<boolean>({
  key: "gameOverState",
  default: false,
  effects: [localStorageEffect("gameOverState")],
});

// interface GameStats {
//   turns: number;
//   timer: number;
// }

// export const gameStatsState = atom<GameStats>({
//   key: "gameStatsState",
//   default: { turns: 0, timer: 1660166233285 },
// });
