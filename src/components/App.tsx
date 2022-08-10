import { ChakraProvider, Container, VStack } from "@chakra-ui/react";
import Board from "components/Board";
import GameControls from "components/GameControls";
import GameProgress from "components/GameProgress";
import { FC } from "react";
import { RecoilRoot } from "recoil";

import "../styles/index.css";

const App: FC = () => (
  <ChakraProvider>
    <RecoilRoot>
      <main className="container">
        <Container className="game-container" py={4} as={VStack}>
          <Board />
          <GameProgress />
          <GameControls />
        </Container>
      </main>
    </RecoilRoot>
  </ChakraProvider>
);

export default App;
