
import React from 'react'

function NewCounter(props) {

   const counter = props.counter;
   const setCounter = props.setCounter;
    return (
        <div>
            <button onClick={ ()=> setCounter(props.counter +1)}>
                +
            </button>
            {props.counter}

            <button onClick={ ()=> setCounter(props.counter -1)}>
                -
            </button>
        </div>
    )
}

export default NewCounter
