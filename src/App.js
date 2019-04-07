import React, { Component } from 'react';
import './App.css';
import './index.css';
import UserInput from './UserInput.js';
import UserOutput from './UserOutput.js';
import Person from './Person/Person.js';

class App extends Component {

  state = {
    persons: [
      { name: 'Kristina', age: 45 },
      { name: 'Matthew', age: 46 },
      { name: 'Alexander', age: 39 }
    ]
  }

  changeNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Gino', age: 38 },
        { name: 'Bob', age: 22 }
      ]
    })
  }

  nameUpdateHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 38 },
        { name: 'Bobby', age: 22 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Indescribably Great App</h1>
        <UserInput 
          name='Kristina' 
          click={this.changeNameHandler.bind(this, 'Alejandro')}/>
        <UserOutput
          click={this.changeNameHandler}
          name={this.state.persons[2].name}
          age='48' />
        <button onClick={this.changeNameHandler.bind(this, 'Alejandro')}>Change Name</button>
        <Person
          click={this.nameUpdateHandler}
          name={this.state.persons[1].name}
          age={this.state.persons[0].age}
          children='Braydon Colton' />
        <Person
          click={this.changeNameHandler}
          name={this.state.persons[0].name}
          age='49'
          children='Tyler Zack' />
      </div>
    );
  }
}

export default App;
