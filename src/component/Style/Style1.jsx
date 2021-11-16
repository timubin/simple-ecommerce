import './Style.css'
import React from 'react'

const myHeader = {
    color :'#845214',
    fontWeight: '600',
    fontFamily: "Arial",
    fontSize: '35px'
}
 function Style1() {
    return (
        <div>
            <h1 style={myHeader}>My name is Mubin</h1>
            <h1 
            style={{
                color : "blue",
                fontWeight:600,
                fontFamily: "Arial",
                fontSize: '35px'
            }}
            >Another Header Tag</h1>
            <button>Click Me</button>
        </div>
    )
}
export default Style1;