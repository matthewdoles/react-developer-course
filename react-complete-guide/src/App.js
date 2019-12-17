import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

class App extends Component {
  state = {
    persons: [
      { id: 'abc', name: 'Matthew', age: 24 },
      { id: 'def', name: 'Max', age: 29 },
      { id: 'ghi', name: 'Steve', age: 26 }
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    // or
    // const spreadPersons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => person.id === id)
    const person =  {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({ persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }
  
  render() {
    let persons = null
    let btnClass = ''

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index)  => {
            return <ErrorBoundary key={person.id}><Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} 
              changed={(event) => this.nameChangedHandler(event, person.id)} /></ErrorBoundary>
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    const assignedClasses = []
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red)
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }

    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button class={btnClass} onClick={this.togglePersonHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;