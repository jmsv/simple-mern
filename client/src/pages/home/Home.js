import React, { Component } from 'react';
import './Home.css';

import TasksList from '../../components/TaskList';

export default class Home extends Component {
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
      <div className="home">
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
