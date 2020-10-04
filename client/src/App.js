import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';

import Home from './pages/home/Home.js';
import About from './pages/about/About.js';

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
        <Router>
          <nav>
            <ul>
              <li>
                <NavLink exact={true} activeClassName='is-active' to='/'>Home</NavLink>
              </li>
              <li>
                <NavLink activeClassName='is-active' to='/about'>About</NavLink>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/" component={Home} >
            </Route>
            <Route path="/about" component={About} >
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
