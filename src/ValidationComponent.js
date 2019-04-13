import React from 'react';

const validation = (props) => {

    return (
      <div className="Validation">
          {/* <p onClick={props.click}>I am {props.name} and I am {props.age} years old</p> */}
          <p>{props.length} {props.message} </p>
          {/* <input type="text" onChange={props.changed} value={props.name}/> */}
          
      </div>
    )
};

export default validation;