import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { ScrollView } from "react-native";
import { Appbar, Button, Card, Text } from "react-native-paper";
import Checkbox from "../components/Checkbox";
import ToggleAllDoneButton from "../components/ToggleAllDoneButton";
import ToggleAllUndoButton from "../components/ToggleAllUndoButton";
import DeleteTaskButton from "@/components/DeleteTaskButton";
import FocusedTaskModal from "@/components/FocusedTaskModel";

type Note = {
  text: string;
  done: boolean;
};

export default function Index() {
  const [input, setInput] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [focusedTask, setFocusedTask] = useState<Note | null>(null);

  const addNote = () => {
    if (input.trim() == "") return;
    setNotes([...notes, { text: input, done: false }]);
    setInput("");
  };

  const toggleDone = (index: number) => {
    const updatedNotes = notes.map((note, i) =>
      i === index ? { ...note, done: !note.done } : note
    );
    setNotes(updatedNotes);
  };

  const toggleAllDone = () => {
    const updatedNotes = notes.map((note) => ({
      ...note,
      done: true,
    }));
    setNotes(updatedNotes);
  };

  const toggleAllNotDone = () => {
    const updatedNotes = notes.map((note) => ({
      ...note,
      done: false,
    }));
    setNotes(updatedNotes);
  };

  const deleteNote = (index: number) => {
    const updatedNotes = notes.filter((_, i) => i !== index);
    setNotes(updatedNotes);
  };

  const handleFocusTask = (task: Note) => {
    setFocusedTask(task);
  };

  const closeFocus = () => {
    setFocusedTask(null);
  };

  const incompleteNotes = notes.filter((note) => !note.done);
  const completedNotes = notes.filter((note) => note.done);

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="To-Do List" />
      </Appbar.Header>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="List item"
          value={input}
          onChangeText={setInput}
          placeholderTextColor={"gray"}
        />
        <Button onPress={addNote} mode="contained" buttonColor="green">
          Add
        </Button>
      </View>

      <ScrollView style={styles.scrollView}>
        {incompleteNotes.length > 0 ? (
          <>
            {incompleteNotes.map((note, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleFocusTask(note)}
              >
                <Card style={styles.card}>
                  <Card.Content style={styles.cardContent}>
                    <Checkbox
                      text={note.text}
                      isChecked={note.done ? true : false}
                      onPress={() => toggleDone(notes.indexOf(note))}
                    />
                    <DeleteTaskButton
                      onDelete={() => deleteNote(notes.indexOf(note))}
                    />
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            ))}
            <ToggleAllDoneButton onToggleAllDone={toggleAllDone} />
          </>
        ) : (
          <Text style={styles.emptyText}>No tasks left!</Text>
        )}

        <Text style={styles.sectionTitle}>Completed</Text>
        {completedNotes.length > 0 ? (
          <>
            {completedNotes.map((note, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleFocusTask(note)}
              >
                <Card style={styles.card}>
                  <Card.Content style={styles.cardContent}>
                    <Checkbox
                      text=""
                      isChecked={note.done ? true : false}
                      onPress={() => toggleDone(notes.indexOf(note))}
                    />
                    <Text style={styles.noteText}>{note.text}</Text>
                    <DeleteTaskButton
                      onDelete={() => deleteNote(notes.indexOf(note))}
                    />
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            ))}
            <ToggleAllUndoButton onToggleAllNotDone={toggleAllNotDone} />
          </>
        ) : (
          <Text style={styles.emptyText}>No completed items!</Text>
        )}
        <FocusedTaskModal
          focusedTask={focusedTask}
          closeFocus={closeFocus}
          deleteNote={deleteNote}
          notes={notes}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
  },
  input: {
    flex: 1,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  scrollView: {
    padding: 10,
  },
  card: {
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  noteText: {
    flex: 1,
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  emptyText: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginVertical: 20,
  },
});
