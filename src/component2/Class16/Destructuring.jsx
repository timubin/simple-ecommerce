import React from 'react'
import SpreadOperator from './SpreadOperator';

function Destructuring() {
    const address = {
        vill : "Jhalakati",
        house:"87/a",
        phone: '01799215401'
    }
    // vill = N/A er mane holo jodi vill nah thake ta hola aita asba
    const {vill="N/A" , house, phone} = address;

   const arryDestruturing = ["Tarikul ", " Mubin ", " korim" ]

   const [firstUser , secondUser, thardUser] = arryDestruturing;

  /*  jodi ami kono ta k bat dita chi ta hola coma dia faka rakta hoba */

  /*  const [firstUser="R/N " , , thardUser] = arryDestruturing; */
    return (
        <>
          <h3>Village:-{vill}</h3> 
          <h3>house:- {house}</h3> 
          <h3>Phone:- {phone}</h3> 
          <hr />
          <h4>Arry Destruturing </h4>
          <h3>{firstUser}</h3>
          <h3>{secondUser}</h3>
          <h3>{thardUser}</h3>

          <div>
             <SpreadOperator address={address} arryDestruturing={arryDestruturing}/>
          </div>
        </>
    )
}

export default Destructuring;
