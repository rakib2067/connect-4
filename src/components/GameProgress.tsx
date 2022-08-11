import { Heading } from "@chakra-ui/react";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import {
  gameOverState,
  playerState,
  playerOneState,
  playerTwoState,
} from "state";
import { Player } from "types";

const GameProgress: FC = () => {
  const player = useRecoilValue(playerState);
  const gameOver = useRecoilValue(gameOverState);

  const playerOneValue = useRecoilValue(playerOneState);
  const playerTwoValue = useRecoilValue(playerTwoState);
  const playerName: Record<Player, string> = {
    1: playerOneValue.name,
    2: playerTwoValue.name,
  };
  const name = playerName[player];

  return (
    <Heading as="h3" size="lg">
      {gameOver ? `${name} wins!` : `${name}'s turn`}
    </Heading>
  );
};

export default GameProgress;
