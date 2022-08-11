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

export const playerOneState = atom<playerConfig>({
  key: "playerOneState",
  default: { name: "Red", color: "#f10000" },
  effects: [localStorageEffect("playerOneState")],
});
export const playerTwoState = atom<playerConfig>({
  key: "playerTwoState",
  default: { name: "Yellow", color: "#ece100" },
  effects: [localStorageEffect("playerTwoState")],
});
export interface playerConfig {
  name: string;
  color: string;
}
