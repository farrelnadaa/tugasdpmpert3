import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TaskItem = ({ text, onDelete }) => {
  return (
    <View style={styles.taskItem}>
      <Text style={styles.taskText}>{text}</Text>
      <Button title="Delete" onPress={onDelete} color="#ff6347" />
    </View>
  );
};

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  taskText: {
    flex: 1,
    marginRight: 10,
  },
});

export default TaskItem;
