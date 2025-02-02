import { Circle, Flex } from "@chakra-ui/react";
import { boardRows } from "const";
import { usePlayPiece } from "hooks";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import {
  boardState,
  gameOverState,
  playerState,
  playerOneState,
  playerTwoState,
} from "state";
import { Player } from "types";

const padCol = (col: number[]): number[] =>
  col.join("").padEnd(boardRows, "0").split("").map(Number);

const Board: FC = () => {
  const play = usePlayPiece();
  const board = useRecoilValue(boardState);
  const player = useRecoilValue(playerState);
  const gameOver = useRecoilValue(gameOverState);
  const playerOneValue = useRecoilValue(playerOneState);
  const playerTwoValue = useRecoilValue(playerTwoState);

  const playerColor: Record<Player, string> = {
    1: playerOneValue.color,
    2: playerTwoValue.color,
  };

  return (
    <Flex justify="center">
      {board.map((col, i) => (
        //For each column in board we have a column in the form of a div
        <Flex
          key={i}
          role="group"
          onClick={() => play(i)}
          flexDirection="column-reverse"
          cursor={gameOver ? "auto" : "pointer"}
        >
          {padCol(col).map((p, j) => (
            //Each time board state changes, the correct disks are redered in each column
            <Circle
              m={1}
              className="disk"
              key={`${i}-${j}`}
              boxShadow="inner"
              bg={playerColor[p as Player] || "gray.300"}
            />
          ))}
          {/* For each column he have the option to enter a disk so long as it is not full */}
          <Circle
            m={1}
            boxShadow="base"
            className="disk"
            visibility="hidden"
            bg={playerColor[player]}
            _groupHover={{
              visibility: gameOver ? "hidden" : "visible",
            }}
          />
        </Flex>
      ))}
    </Flex>
  );
};

export default Board;
