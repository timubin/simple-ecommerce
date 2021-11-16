import React from 'react'
import { useState } from 'react/cjs/react.development'
import "./Style.css"

function ConditionalFunction() {

           const [conter, setConter]= useState(0)
            const printDisableDecrement = () =>{
                return(
                    <button className={"counter-button-disabled"}>
                        -
                    </button>
                )
            }

            const printEnableDecrement = () =>{
                return(
                    <button className={"counter-button"} onClick={() => setConter(conter -1)}>
                        -
                    </button>
                )
            }

  /*          const incerment = ()=>{
               setConter(conter +1)
           }


           const digrincerment = ()=>{
            setConter(conter -1)
        } */

      


     return (
        <div>
            <button className={"counter-button"} onClick={() => setConter(conter +1)}>
                        +
                    </button>
           <span className="counter">{conter}</span>

           {conter !== 0 && printEnableDecrement()}
           {conter === 0 && printDisableDecrement()}

            
            <p>
                {conter === 0 ? "Zero" : "Not Zero" }

            </p>
        </div>
    )
}

export default ConditionalFunction


