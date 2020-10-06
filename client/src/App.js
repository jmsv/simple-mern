import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';
import './App.css';

import Home from './pages/home/Home.js';
import About from './pages/about/About.js';

const App = () => {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <NavLink exact={true} activeClassName="is-active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="is-active" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
