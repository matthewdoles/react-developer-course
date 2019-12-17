import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
  state = {
    text: ''
  }

  valueChangeHandler = (event) => {
    let newText = this.state.text
    newText = event.target.value
    this.setState({ text: newText })
  }

  deleteCharHandler = (event, index) => {
    let enteredTextArray = this.state.text.slice().split('')
    enteredTextArray.splice(index, 1)
    this.setState({ text: enteredTextArray.join('') })
  }

  render() {
    const charList = 
      this.state.text.split('').map((char, index)  => {
        return <CharComponent 
          click={() => this.deleteCharHandler(index)}
          char={char}
          key={index} />
      }
    );

    return (
      <div className="App">
        <input 
          type="text" 
          className="Input" 
          value={this.state.text} 
          onChange={(event) => this.valueChangeHandler(event)}/>
        <p>Length: {this.state.text.length}</p>
        <ValidationComponent textLength={this.state.textlength} />
        {charList}
      </div>
    );
  }
}

export default App;
