// EditTaskButton.tsx
import React from "react";
import { Button } from "react-native-paper";

interface EditTaskButtonProps {
  onEdit: () => void;
}

const EditTaskButton: React.FC<EditTaskButtonProps> = ({ onEdit }) => {
  return (
    <Button
      onPress={onEdit}
      mode="contained"
      buttonColor="black"
      textColor="white"
      style={{ marginLeft: 10 }}
    >
      Edit
    </Button>
  );
};

export default EditTaskButton;
