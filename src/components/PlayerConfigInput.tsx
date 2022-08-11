import { FormControl, Input } from "@chakra-ui/react";
import React from "react";
import { playerConfig } from "state";

interface PlayerConfigInputProps {
  playerConfigState: playerConfig;
  setPlayerConfigState: (config: playerConfig) => void;
  placeholder: string;
}
export default function PlayerConfigInput({
  playerConfigState,
  setPlayerConfigState,
  placeholder,
}: PlayerConfigInputProps) {
  function handleOnInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPlayerConfigState({ ...playerConfigState, name: e.target.value });
  }
  function handleOnColorChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPlayerConfigState({ ...playerConfigState, color: e.target.value });
  }
  return (
    <FormControl className="form-control">
      <Input
        flex={6}
        mx={1}
        className="name-input"
        placeholder={placeholder}
        onChange={handleOnInputChange}
        value={playerConfigState.name}
        type="text"
      />
      <Input
        flex={1}
        mx={1}
        padding={0}
        className="color-input"
        onChange={handleOnColorChange}
        value={playerConfigState.color}
        type="color"
      />
    </FormControl>
  );
}
