import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import constants from './constants';
import TasksList from './components/TaskList';

const base_url = constants.API_URL;

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const getTasks = useCallback(() => {
    fetch(`${base_url}/api/tasks`)
      .then(res => res.json())
      .then(setTasks);
  });

  useEffect(() => {
    getTasks();
  }, []);

  const clickAddTask = event => {
    event.preventDefault();

    fetch(`${base_url}/api/tasks/add`, {
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
        <input
          type="text"
          size="30"
          placeholder="New Task"
          value={newTaskTitle}
          onChange={event => setNewTaskTitle(event.target.value)}
        />
        <input className="btn-primary" type="submit" value="Add" />
      </form>
    </div>
  );
};

export default App;
