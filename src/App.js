import React, { Component } from 'react';
import './App.css';
import './index.css';
import './CharComponent.css'
import Validation from './ValidationComponent.js';
import CharComponent from './CharComponent.js';

class App extends Component {

    state = {
        length: 0,
        letter: 'A',
        message: 'need text',
        input: ''
    }

    changeInputHandler = (event) => {
        var newInput = event.target.value;
        var msg;
        if (newInput.length < 5) msg = 'too short';
        if (newInput.length >= 5) msg = 'long enough';

        this.setState({
            length: newInput.length,
            input: newInput,
            message: msg
        })
    }

    deleteCharHandler = (index) => {
        
        var letters = this.state.input.split('');
        letters.splice(index, 1)
        var updated = letters.join('');
        var msg;
        if (updated.length < 5) msg = 'too short';
        if (updated.length >= 5) msg = 'long enough';

        this.setState({
            input: updated,
            length: updated.length,
            message: msg
        })
    }

    render() {
        // make array of char components, each displaying single char
        var letterList = this.state.input.split('').map((char, index) => {
            return <CharComponent 
            delete={()=>this.deleteCharHandler(index)}
            key={index} letter={char}/>
        });
        // console.log(letter);
        

        return (
            <div className='App'>
            
                <h1>Improved App from Scratch</h1>
                <input onChange={(event)=>{this.changeInputHandler(event)}} value={this.state.input}></input>
                <br></br>
                <Validation length={this.state.length} message={this.state.message}></Validation>
                {letterList}
            </div>

        );

    }

}

export default App;

