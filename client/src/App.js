import React, { Component } from 'react';
import './App.css';
import constants from './constants';
import TasksList from './components/TaskList';

const base_url = constants.API_URL;
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

    fetch(`${base_url}/api/tasks/add`, {
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
          <input
            type="text"
            size="30"
            placeholder="New Task"
            name="newTaskTitle"
            value={this.state.newTaskTitle}
            onChange={this.handleChange}
          />
          <input className="btn-primary" type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

export default App;
