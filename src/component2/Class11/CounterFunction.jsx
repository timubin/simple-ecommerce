import React from 'react'
import { useState } from 'react/cjs/react.development'
import "./Style.css"

function CounterFunction() {
           const [conter, setConter]= useState(0)
   
           const incerment = ()=>{
               setConter(conter +1)
           }

           const digrincerment = ()=>{
            setConter(conter -1)
        }
     return (
        <div>
            <button className="counter-button" onClick={incerment}>
                +
            </button>
        <span className="counter">{conter}</span>
            <button className="counter-button" onClick={digrincerment}>
                -
            </button>
        </div>
    )
}

export default CounterFunction
