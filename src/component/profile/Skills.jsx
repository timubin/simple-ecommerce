import React from 'react'

 function Skills(props) {
    return (
        
            <div className='Skills'>
            <h3>Skills: </h3>
            <ul>
                
                <li>{props.skillsA}</li>
                <li>{props.skillsB}</li>
                <li>{props.skillsC}</li>
                
            </ul>
        </div>
      
    )
}
export default Skills;