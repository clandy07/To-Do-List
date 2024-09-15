import React from "react";
import { Button } from "react-native-paper";
type Props = {
  onToggleAllNotDone: () => void;
};

const ToggleAllUndoButton: React.FC<Props> = ({ onToggleAllNotDone }) => {
  return (
    <Button onPress={onToggleAllNotDone} mode="contained" buttonColor="green">
      Uncheck all
    </Button>
  );
};

export default ToggleAllUndoButton;
