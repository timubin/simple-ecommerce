import React from 'react'


const Person =({person}) =>{
    return (
        <div>
            <h2>{person.id} {person.name}</h2>
            
        </div>
    )
}

export default Person;
