import React from 'react'

function RestOperator() {
    const sum = ( ...numbers ) => {
        let total = 0;
        numbers.forEach(n => total += n);
        return total;
    }
    return (
        <div>
            <h3>Rest Operator </h3>
           <h3>{sum (1,2,3,4,5)}</h3> 
        </div>
    )
}

export default RestOperator
