import { Button, useDisclosure } from "@chakra-ui/react";
import { FC } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import {
  boardState,
  gameOverState,
  playerOneState,
  playerState,
  playerTwoState,
} from "state";
import { ModalForm } from "./ModalForm";

const GameControls: FC = () => {
  const board = useRecoilValue(boardState);
  const resetBoard = useResetRecoilState(boardState);
  const resetPlayer = useResetRecoilState(playerState);
  const resetGameOver = useResetRecoilState(gameOverState);
  const resetplayerOne = useResetRecoilState(playerOneState);
  const resetplayerTwo = useResetRecoilState(playerTwoState);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleResetGame = () => {
    resetBoard();
    resetPlayer();
    resetGameOver();
  };

  function handleResetPlayerConfig() {
    resetplayerOne();
    resetplayerTwo();
  }
  return (
    <div>
      <Button
        mx={1}
        className="btn--game-control"
        onClick={handleResetGame}
        isDisabled={!board.some((col) => col.length)}
      >
        Reset
      </Button>
      <Button
        mx={1}
        className="btn--game-control"
        onClick={onOpen}
        isDisabled={board.some((col) => col.length)}
      >
        Settings
      </Button>
      <ModalForm
        handleReset={handleResetPlayerConfig}
        isOpen={isOpen}
        onClose={onClose}
      />
    </div>
  );
};

export default GameControls;
