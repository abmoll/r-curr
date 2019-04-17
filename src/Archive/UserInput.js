import React from 'react';
import './UserOutput.css';

const userInput = (props) => {

    return (
      <div className="UserInput">
          <input type="text" onChange={props.click} value={props.name}/>
      </div>
    )
};

export default userInput;