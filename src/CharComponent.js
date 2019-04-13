import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {

    return (
      <div className="CharComponent">
          {/* <p onClick={props.click}>I am {props.name} and I am {props.age} years old</p> */}
          <p>letter: {props.letter}</p>
          {/* <input type="text" onChange={props.changed} value={props.name}/> */}
          
      </div>
    )
};

export default charComponent;