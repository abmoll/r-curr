import React, { Component } from 'react';
import './App.css';
import './index.css';
import './CharComponent.css'
import Validation from './ValidationComponent.js';
import CharComponent from './CharComponent.js';

class App extends Component {

  state = {
    text: [
      { id: 1, length: 0, message: 'waiting for text' },
      { id: 2, length: 0, message: 'waiting for text' },
      { id: 3, length: 0, message: 'waiting for text' }
    ],
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
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

  changedTextHandler = (event) => {

    var textInput = event.target.value;
    console.log(textInput);

    var leng = textInput.length;
    var mess = '';
    if (leng < 5) mess = 'too short';
    if (leng > 5) mess = 'too long';
    this.setState({
      text: [
        { length: leng, message: mess },
        { length: leng, message: mess },
        { length: leng, message: mess }
      ]
    })
  }

  render() {
    let texter = (
    <div>
      {this.state.text.map((texts, index) => {
        return <Validation
          length={texts.length}
          message={texts.message}
          key={texts.id}
          // changed={(event) => this.changedTextHandler(event, texts.id)}
        />
      })}
    </div>
    )
  


    return (
      <div className="App">
        <h1>An Indescribably Great App</h1>
        <br />
        <input onChange={(event) => this.changedTextHandler(event)}></input>
        {texter}
        <CharComponent letter='A' />
      </div>
    );
  }
}

export default App;