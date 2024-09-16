// FocusedTaskModal.tsx
import React from "react";
import {
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import { Button, Card } from "react-native-paper";
import EditTaskButton from "./EditTaskButton";

type Note = {
  text: string;
  done: boolean;
};

interface FocusedTaskModalProps {
  focusedTask: Note | null;
  closeFocus: () => void;
  deleteNote: (index: number) => void;
  notes: Note[];
  isEditing: boolean;
  editText: string;
  setEditText: (text: string) => void;
  saveEdit: () => void;
  handleEditTask: (note: Note, index: number) => void;
}

const FocusedTaskModal: React.FC<FocusedTaskModalProps> = ({
  focusedTask,
  closeFocus,
  deleteNote,
  notes,
  isEditing,
  editText,
  setEditText,
  saveEdit,
  handleEditTask,
}) => {
  if (!focusedTask) {
    return null;
  }

  const index = notes.indexOf(focusedTask);

  const handleDelete = () => {
    deleteNote(index);
    closeFocus();
  };

  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={!!focusedTask}
      onRequestClose={closeFocus}
    >
      <TouchableOpacity style={styles.overlay} onPress={closeFocus}>
        <TouchableWithoutFeedback>
          <Card style={styles.focusedCard}>
            <Card.Content style={styles.cardContent}>
              {isEditing ? (
                <TextInput
                  style={styles.editTextInput}
                  value={editText}
                  onChangeText={setEditText}
                />
              ) : (
                <Text style={styles.focusedText}>{focusedTask.text}</Text>
              )}
              {isEditing ? (
                <Button
                  onPress={saveEdit}
                  mode="contained"
                  buttonColor="green"
                  style={styles.saveButton}
                >
                  Save
                </Button>
              ) : (
                <></>
              )}

              <Button
                onPress={handleDelete}
                mode="contained"
                buttonColor="red"
                style={styles.deleteButton}
              >
                X
              </Button>
            </Card.Content>
          </Card>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  focusedCard: {
    width: "84%",
    padding: 10,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  focusedText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  deleteButton: {
    borderRadius: 10,
    marginRight: -10,
    minWidth: 30,
    width: 60,
    alignSelf: "center",
  },
  editTextInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginRight: 10,
  },
  saveButton: {
    marginRight: 5,
  },
});

export default FocusedTaskModal;
