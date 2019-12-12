import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Matthew', age: 24 },
      { name: 'Max', age: 29 },
      { name: 'Steve', age: 26 }
    ]
  });

  const switchNameHandler = (newName) => {
    setPersonsState({
      persons: [
        { name: 'Matt', age: 24 },
        { name: 'Maximilian', age: 29 },
        { name: newName, age: 26 }
      ]
    })
  }

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={() => switchNameHandler('Kevin')}>Switch Names</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} click={switchNameHandler.bind(this, 'Jeffy')}>My Hobbies: Teaching</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default app;