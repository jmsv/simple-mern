import React, { Component } from 'react';
import './About.css';

export default class Home extends Component {
  render() {
    return (
      <div className="about">
        <h1>About</h1>
        <p>
          While there are many MERN starters on the interwebs already, I've struggled to find a 'minimal viable' MERN app. Existing examples usually involve other libraries and tools such as Redux, React Router, Typescript, Docker etc. These are all great things, but add unnecessary complexity when you just want to start simple.
          This MERN starter, simple - mern aims to be the minimum you need to get started with the stack.
        </p>
      </div>
    );
  }
}
