import React from 'react'

 function Bio(props) {
    return (
        <div>
     <div className='Bio'>
     <h3>{props.name}</h3>
     <p>{props.title}</p>
        </div>
        </div>
    )
}
export default Bio;