import React from 'react';
import { SafeAreaView, View, TextInput, StyleSheet } from 'react-native';
import { Appbar, Button } from 'react-native-paper';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="To-Do List" />
      </Appbar.Header>

      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='List item'/>
        <Button mode="contained">Add</Button>
      </View>
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
});