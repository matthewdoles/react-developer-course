import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Matthew" />
        <Person name="Max" >My Hobbies: Teaching</Person>
        <Person name="Mark" />
      </div>
    );

    // JSX vs. JavaScript

    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
