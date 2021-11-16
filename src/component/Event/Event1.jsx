
import React, { Component } from 'react'

 class Event1 extends Component {
    
    handleButtonClick = event =>{
        alert('First React Event Handler')
    }
    handleChange = event => {
        console.log(event.target.value)
    }
    render() {
        return (
            <div>
                 <button onClick={this.handleButtonClick}>On Click </button>
                 <button onDoubleClick={this.handleButtonClick}>On Double Click </button>
                 <br />
                 <input type="text" placeholder="Enter some text" id="myInput" onChange={this.handleChange}/>
            </div>
        )
    }
}
export default Event1;