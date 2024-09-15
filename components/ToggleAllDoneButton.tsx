import React from "react";
import { Button } from "react-native-paper";

type Props = {
  onToggleAllDone: () => void;
};

const ToggleAllDoneButton: React.FC<Props> = ({ onToggleAllDone }) => {
  return (
    <Button onPress={onToggleAllDone} mode="contained" buttonColor="green">
      Check all
    </Button>
  );
};

export default ToggleAllDoneButton;
