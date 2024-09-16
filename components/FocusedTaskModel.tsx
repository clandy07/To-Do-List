import React from "react";
import {
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Text,
  StyleSheet,
} from "react-native";
import { Button, Card } from "react-native-paper";

type Note = {
  text: string;
  done: boolean;
};

interface FocusedTaskModalProps {
  focusedTask: Note | null;
  closeFocus: () => void;
  deleteNote: (index: number) => void;
  notes: Note[];
}

const FocusedTaskModal: React.FC<FocusedTaskModalProps> = ({
  focusedTask,
  closeFocus,
  deleteNote,
  notes,
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
              <Text style={styles.focusedText}>{focusedTask.text}</Text>
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
});

export default FocusedTaskModal;
