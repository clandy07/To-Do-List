import React, {useState} from 'react';
import { SafeAreaView, View, TextInput, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import { Appbar, Button, Card, Text } from 'react-native-paper';

export default function Index() {

  const [input, setInput] = useState('');

  const [notes, setNotes] = useState<string[]>([]);

  const addNote = () => {
    if(input.trim()=='') return;
    setNotes([...notes, input]);
    setInput('');
  }


  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="To-Do List" />
      </Appbar.Header>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='List item' value={input} onChangeText={setInput}/>
        <Button onPress={addNote} mode="contained">Add</Button>
      </View>


      <ScrollView style={styles.scrollView}>
        {notes.map((note, index) => (
          <Card key={index} style={styles.card}>
            <Card.Content>
              <Text>{note}</Text>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>

    </SafeAreaView>
  )
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
    borderColor: '#ddd',
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
  },
});