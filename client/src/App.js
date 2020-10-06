import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

import taskService from './services/task.service.js';
import TasksList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const getTasks = useCallback(async () => {
    const tasks = await taskService.getTasks();
    setTasks(tasks);
  });

  useEffect(() => {
    getTasks();
  }, []);

  const clickAddTask = async event => {
    event.preventDefault();
    await taskService.addTask(newTaskTitle);
    setNewTaskTitle('');
    getTasks();
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
