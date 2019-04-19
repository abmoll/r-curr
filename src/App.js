import React, { Component } from 'react';
import './App.css';
import './index.css';
// import UserInput from './UserInput.js';
// import UserOutput from './UserOutput.js';
import Person from './Person/Person.js';
// import Validation from './ValidationComponent.js';
// import CharComponent from './CharComponent.js';

class App extends Component {

  state = {
    persons: [
      { id: 1, name: 'Kristina', age: 45 },
      { id: 2, name: 'Matthew', age: 46 },
      { id: 3, name: 'Alexander', age: 39 }
    ],
    showPersons: true
  }
  // gets array index of person module where the event occurred
  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(pers => {
      return pers.id === id;
    });
    //copies the person at that index
    const person = {...this.state.persons[personIndex]};
    // sets name of that person to name in clicked text field
    person.name = event.target.value;
    // copies entire state array to persons
    const persons = [...this.state.persons]
    //sets the person at the clicked index to the new person value
    persons[personIndex] = person;
    // resets the entire state for persons to new persons variable
    this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }
  // nameUpdateHandler = (event) => {
  //   this.setState({
  //     persons: [
  //       { name: 'Max', age: 28 },
  //       { name: event.target.value, age: 38 },
  //       { name: 'Bobby', age: 22 }
  //     ]
  //   })
  // }
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  render() {
    
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} 
              changed={(event) => this.changeNameHandler(event, person.id)}
              key={person.id}
              />
          })}

          {/* <UserOutput
            click={this.changeNameHandler}
            name={this.state.persons[2].name}
            age='48' />  */}
         {/* <button onClick={this.changeNameHandler.bind(this, 'Alejandro')}>Change Name</button> */}
          {/* <Person
            click={this.nameUpdateHandler}
            name={this.state.persons[1].name}
            age={this.state.persons[0].age}
            children='Braydon Colton' />
          <Person
            click={this.changeNameHandler}
            name={this.state.persons[0].name}
            age='49'
            children='Tyler Zack' /> */}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>An Indescribably Great App</h1>
        <br></br>
        <button onClick={this.togglePersonHandler}>Toggle</button>
        {persons}
        <br/>
        <input changed={(event) => this.changeNameHandler(event)} ></input>

      </div>
    );
  }
}

export default App;