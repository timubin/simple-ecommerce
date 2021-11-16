import React from 'react'
import RestOperator from './RestOperator';

function SpreadOperator(props) {
    const {vill, house, phone} = props.address;
   /*  const {fastName, secondName, thardName} = props.arryDestruturing; */

   const numbers = [0, 1, 2 ]
   const anotherNubmer = 190;
   const allNumber = [...numbers+ "," , anotherNubmer ]
   const newAllNubmers = [100+ ",", ...numbers+ "," , 200]

   const point = {
       x: 1,
       y:2
   }

   const pointMore ={
       ...point , z : 3
   }


    return (
        <div>
            {vill} <br />
            {house} <br />
            {phone} <br />
            <hr />       
            {props.arryDestruturing}<br />
            <h3>Arry Sprad Operator</h3>
            <h3>{allNumber}</h3>
            <h3>{newAllNubmers}</h3>
            <h3>{pointMore.x}</h3>
            <h3>{pointMore.y}</h3>
            <h3>{pointMore.z}</h3> 
            <RestOperator/>

        </div>
    )
}

export default SpreadOperator
