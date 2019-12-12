import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Matthew', age: 24 },
      { name: 'Max', age: 29 },
      { name: 'Steve', age: 26 }
    ]
  }
  
  switchNameHandler = () => {
    // Incorrect
    // this.state.persons[0].name = 'Matt'

    // Correct
    this.setState({
      persons: [
        { name: 'Matt', age: 24 },
        { name: 'Maximilian', age: 29 },
        { name: 'Steven', age: 26 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Names</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My Hobbies: Teaching</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );

    // JSX vs. JavaScript

    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
