import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import TasksList from './components/TaskList';
import { Button, Input } from '@material-ui/core';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const getTasks = useCallback(() => {
    fetch('/api/tasks')
      .then(res => res.json())
      .then(setTasks);
  });

  useEffect(() => {
    getTasks();
  }, []);

  const clickAddTask = event => {
    event.preventDefault();

    fetch('/api/tasks/add', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTaskTitle }),
    }).then(() => {
      setNewTaskTitle('');
      getTasks();
    });
  };

  return (
    <div className="App">
      <h1>My Tasks</h1>

      <TasksList tasks={tasks} updateTasks={getTasks} />

      <form onSubmit={clickAddTask}>
        <Input
          className="new-task"
          type="text"
          size="500"
          placeholder="New Task"
          value={newTaskTitle}
          onChange={event => setNewTaskTitle(event.target.value)}
          variant="outlined"
        ></Input>
        <Button
          className="submit"
          variant="contained"
          color="primary"
          size="small"
          type="submit"
          value="Add"
        >
          Add
        </Button>
      </form>
    </div>
  );
};

export default App;
