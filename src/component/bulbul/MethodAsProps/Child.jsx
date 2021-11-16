import React from 'react'

function Child(props) {
    
    return (
        <div>
            <button onClick={props.gretingMethod}>Gretting</button>
        </div>
    )
}

export default Child
