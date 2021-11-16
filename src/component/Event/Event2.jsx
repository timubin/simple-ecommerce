
import React, { Component } from 'react'

class Event2 extends Component {
    state = {
        name: " "
    }
   handleButtonClick = event =>{
       alert('First React Event Handler')
   }
   handleChange = event => {
       this.setState({name: event.target.value})
   }
   render() {
       return (
           <div>
                <button onClick={this.handleButtonClick}>On Click </button>
                <button onDoubleClick={this.handleButtonClick}>On Double Click </button>
                <br />
                <input type="text" value={this.state.name} placeholder="Enter some text" id="myInput" onChange={this.handleChange}/>
                {this.state.name && <h3>Welcome {this.state.name}</h3>}
           </div>
       )
   }
}
export default Event2;