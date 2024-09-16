import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

type DeleteButtonProps = {
  onDelete: () => void;
};

const DeleteTaskButton: React.FC<DeleteButtonProps> = ({ onDelete }) => {
  return (
    <Button
      mode="contained"
      onPress={onDelete}
      contentStyle={styles.content}
      style={styles.button}
      labelStyle={styles.label}
      compact={true}
    >
      X
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    minWidth: 24,
    width: 24,
    height: 24,
    padding: 0,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: 40,
    height: 40,
  },
  label: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default DeleteTaskButton;
