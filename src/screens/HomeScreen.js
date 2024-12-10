import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import TaskInput from '../components/TaskInput';
import TaskItem from '../components/TaskItem';

const HomeScreen = () => {
  const [tasks, setTasks] = useState([]);

  // Lifecycle: load initial tasks
  useEffect(() => {
    // Simulasi memuat data dari server
    const loadTasks = () => {
      setTasks([
        { id: '1', text: 'Learn React Native' },
        { id: '2', text: 'Build a To-Do App' },
      ]);
    };
    loadTasks();
  }, []);

  const addTask = (taskText) => {
    if (!taskText.trim()) {
      Alert.alert('Error', 'Task cannot be empty');
      return;
    }
    setTasks((prevTasks) => [
      ...prevTasks,
      { id: Math.random().toString(), text: taskText },
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <View style={styles.container}>
      <TaskInput onAddTask={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem text={item.text} onDelete={() => deleteTask(item.id)} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
});

export default HomeScreen;
