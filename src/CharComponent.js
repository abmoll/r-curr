import React from 'react';
import './CharComponent.css';

const char = (props) => {

    return (
        <div className='CharComponent'>
            <p onClick={props.delete}> {props.letter} </p>
        </div>
    )
}


export default char