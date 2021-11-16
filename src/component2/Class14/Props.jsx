import React from 'react'
import Test from './Test'

function Propss() {
    const name =[ "Mubin" , "Korim" , "Jobber"  ]
    const [address , setAddress] = (
        [
            {
                myName : "Mubin",
                myAge: 25,
                myMobel: "Apple"
             },
    
             {
                myName : "Korim",
                myAge: 27,
                myMobel: "Nokia"
             },
             {
                myName : "Jobber",
                myAge: 28,
                myMobel: "Lg"
             }
        ]
    )

    return (
        <div>
             <div className="App">
            
            <Test name={name} address={address}/>
        </div>
        </div>
    )
}

export default Propss






