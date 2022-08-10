import { boardRows } from "const";
import { useRecoilState } from "recoil";
import { boardState, gameOverState, playerState } from "state";

const testWin = (arr: number[]): boolean => /1{4}|2{4}/.test(arr.join(""));

const usePlayPiece = () => {
  const [board, setBoard] = useRecoilState(boardState);
  const [player, setPlayerTurn] = useRecoilState(playerState);
  const [gameOver, setGameOver] = useRecoilState(gameOverState);

  return (col: number) => {
    // Prevent adding a piece when the game is over
    if (gameOver) {
      return;
    }

    // Prevent adding a piece when the column is full
    if (board[col].length === boardRows) {
      return;
    }

    // Play piece (non mutating)
    const newBoard = board.map((column, i) =>
      i === col ? [...column, player] : column
    );

    const row = newBoard[col].length - 1;

    //Return diagonal array based on the last placed disk
    function didWinDiagonally(reverse: boolean = false): number[] {
      //Starting point 3 columns to the left of currently placed piece and either 3 rows below/above
      const result: number[] = [];

      let positionX = col - 3;
      let positionY = reverse ? row + 3 : row - 3;

      // Loop through from either bottom-left/top-left and add valid disks to array
      for (let i = 0; i <= 6; i++) {
        if (newBoard[positionX] && newBoard[positionX][positionY])
          result.push(newBoard[positionX][positionY]);

        positionX++;
        positionY = reverse ? positionY - 1 : positionY + 1;
      }
      return result;
    }

    if (
      testWin(newBoard[col]) || // Did win vertically
      testWin(newBoard.map((col) => col[row] || 0)) || // Did win horizontally
      testWin(didWinDiagonally()) || //Did win diagonally (bottom left -> top right)
      testWin(didWinDiagonally(true)) //Did win diagonally (top left -> bottom right)
    ) {
      setGameOver(true);
    } else {
      setPlayerTurn(player === 1 ? 2 : 1);
    }

    setBoard(newBoard);
  };
};

export default usePlayPiece;
