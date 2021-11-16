import React from 'react'

function PropsChild(props) {
    return (
        <div>
            <h2>{props.myArray}</h2>
            {/* <h3>{props.MyObject.Name}</h3> */}
            
            <button onClick= {props.myFunction}>Function Component </button>
            
            <div>
                <ul>
                    {
                    props.myArray.map ((arrey , index) => (
                        <li>{arrey}</li>
                    ))
                    
                    }
                </ul>
            </div>
        </div>
    )
}

export default PropsChild
