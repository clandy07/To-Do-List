import React, { useState } from "react";
import { SafeAreaView, View, TextInput, StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { Appbar, Button, Card, Text } from "react-native-paper";
import Checkbox from "../components/Checkbox";

type Note = {
	text: string;
	done: boolean;
};

export default function Index() {
	const [input, setInput] = useState("");
	const [notes, setNotes] = useState<Note[]>([]);

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
					incompleteNotes.map((note, index) => (
						<Card key={index} style={styles.card}>
							<Card.Content style={styles.cardContent}>
								<Checkbox
									text={note.text}
									isChecked={note.done ? true : false}
									onPress={() => toggleDone(notes.indexOf(note))}
								/>
							</Card.Content>
						</Card>
					))
				) : (
					<Text style={styles.emptyText}>No tasks left!</Text>
				)}

				<Text style={styles.sectionTitle}>Completed</Text>
				{completedNotes.length > 0 ? (
					completedNotes.map((note, index) => (
						<Card key={index} style={styles.card}>
							<Card.Content style={styles.cardContent}>
								<Checkbox
									text=""
									isChecked={note.done ? true : false}
									onPress={() => toggleDone(notes.indexOf(note))}
								/>
								<Text style={styles.noteText}>{note.text}</Text>
							</Card.Content>
						</Card>
					))
				) : (
					<Text style={styles.emptyText}>No completed items!</Text>
				)}
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
		flexDirection: "row",
		alignItems: "center",
	},
	cardContent: {
		flexDirection: "row",
		alignItems: "center",
		flex: 1,
	},
	noteText: {
		marginLeft: 8,
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: "bold",
		marginVertical: 10,
	},
	emptyText: {
		fontSize: 16,
		color: 'gray',
		textAlign: 'center',
		marginVertical: 20,
	  },
});
