import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props)
    console.log('[App.js] constructor')
  }

  state = {
    persons: [
      { id: 'abc', name: 'Matthew', age: 24 },
      { id: 'def', name: 'Max', age: 29 },
      { id: 'ghi', name: 'Steve', age: 26 }
    ],
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state
  }

  componentWillMount() {
    console.log('[App.js] componentWillMount')
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
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
    console.log('[App.js] render')
    let persons = null

    if(this.state.showPersons) {
      persons = (
        <Persons 
          persons={this.state.persons} 
          clicked={this.deletePersonHandler} 
          changed={this.nameChangedHandler}/>
      );
    }

    return (
      <div className={classes.App}>
      <Cockpit 
        showPersons={this.state.showPersons}
        persons={this.state.persons} 
        clicked={this.togglePersonHandler}
        title={this.props.appTitle}/>
        {persons}
      </div>
    );
  }
}

export default App;