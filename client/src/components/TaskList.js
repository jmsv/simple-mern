import React, { Component } from 'react';
import constants from '../constants';

const base_url = constants.API_URL;
export default class TaskList extends Component {
  state = {
    tasks: []
  };

  componentDidMount() {
    this.getTasks();
  }

  getTasks = () => {
    fetch(`${base_url}/api/tasks`)
      .then(res => res.json())
      .then(tasks => {
        this.setState({ tasks });
      });
  };

  clickDeleteTask = (event, task) => {
    event.preventDefault();

    fetch(`${base_url}/api/tasks/delete/${task._id}`, {
      method: 'delete'
    })
      .then(res => res.json())
      .then(t => {
        this.getTasks();
      });
  };

  toggleDone = task => {
    task.done = !task.done;

    this.setState({ tasks: this.state.tasks });

    fetch(`${base_url}/api/tasks/update/${task._id}`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ done: task.done })
    });
  };

  render() {
    const { tasks } = this.state;

    return (
      <ul className="tasks">
        {tasks.map(task => (
          <li key={task._id}>
            <label className={task.done ? 'done' : ''}>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => this.toggleDone(task)}
              />{' '}
              {task.title}
              <svg
                onClick={event => this.clickDeleteTask(event, task)}
                className="delete-button"
                width="16"
                height="16"
                viewBox="0 0 12 16"
              >
                <path d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path>
              </svg>
            </label>
          </li>
        ))}
      </ul>
    );
  }
}
