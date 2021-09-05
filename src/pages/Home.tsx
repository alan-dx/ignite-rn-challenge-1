import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task
    setTasks(oldTasks => [...oldTasks, {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }])

  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists

    // const updatedTasks = tasks.map(task => {//aonther way to do
    //   if (task.id === id) {
    //     task.done = !task.done
    //   }
    //   return ({...task})
    // })

    const updatedTasks = tasks.map(task => ({...task}))//JS is POO and immutability of react

    let task = updatedTasks.find(task => task.id === id)

    if (task) {
      task.done = !task.done//JS is POO
    }

    setTasks(updatedTasks)

    // setTasks(oldTasks => oldTasks.map(task => {//another way to do
    //   if (task.id === id) {
    //     task.done = !task.done
    //   }

    //   return ({...task})
    // }))

  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks(oldTasks => oldTasks.filter(task => task.id !== id))
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})