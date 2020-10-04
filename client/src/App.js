import React, { Component } from 'react';
import './App.css';
import TasksList from './components/TaskList';
import { Button, Input } from '@material-ui/core';

class App extends Component {
  state = {
    newTaskTitle: ''
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  clickAddTask = event => {
    event.preventDefault();

    const title = this.state.newTaskTitle;

    fetch('/api/tasks/add', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    }).then(() => {
      this.setState({ newTaskTitle: '' });
      this.refs.tasksList.getTasks();
    });
  };

  render() {
    return (
      <div className="App">
        <h1>My Tasks</h1>

        <TasksList ref="tasksList" />

        <form onSubmit={this.clickAddTask}>
          <Input
            type="text"
            size="500"
            placeholder="New Task"
            name="newTaskTitle"
            value={this.state.newTaskTitle}
            onChange={this.handleChange}
            variant="outlined"
          ></Input>
          <Button className="submit" variant="contained" color="primary" size="small" type="submit" value="Add">Add</Button>
        </form>
      </div>
    );
  }
}

export default App;
