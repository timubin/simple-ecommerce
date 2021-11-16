import React from 'react'

function Test(props) {

    return (
        <div>
            <div>
            <h2>{props.name}</h2>
            <h3>{props.address.myName}</h3>
            <h3>{props.address.myAge}</h3>
            <h3>{props.address.myMobel}</h3>
            </div>
         
        
            <div>
                <h5>This is Array</h5>
                { props.name.map((arryName, index) =>
           (
               <li>{arryName }</li>
           )
           
           )}
            
            </div>
      
     
               
            
        </div>

       
    )
}

export default Test;
