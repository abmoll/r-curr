import React from 'react';


const validation = (props) => {

    return (
        <div className='Validation'>
            <p> {props.message} {props.length}</p>
        </div>
    )
}


export default validation