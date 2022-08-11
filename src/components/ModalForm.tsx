import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { playerOneState, playerTwoState } from "state";
import PlayerConfigInput from "./PlayerConfigInput";
interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
  handleReset: () => void;
}

export function ModalForm({ onClose, isOpen, handleReset }: ModalFormProps) {
  const [playerOne, setPlayerOneState] = useRecoilState(playerOneState);
  const [playerTwo, setPlayerTwoState] = useRecoilState(playerTwoState);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Player Config:</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <PlayerConfigInput
                placeholder={"Player 1 Name:"}
                playerConfigState={playerOne}
                setPlayerConfigState={setPlayerOneState}
              />
              <PlayerConfigInput
                placeholder={"Player 2 Name:"}
                playerConfigState={playerTwo}
                setPlayerConfigState={setPlayerTwoState}
              />
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleReset}>
              Reset
            </Button>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
