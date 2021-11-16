
import React, { Component } from 'react'

class Event3 extends Component {
    state = {
        name: " "
    }
   handleButtonClick = event =>{
       alert('First React Event Handler')
   }
   handleChange = event => {
       this.setState({name: event.target.value})
   }
   handleFocus= event => {
       console.log("I am focus Event")
   }
   handleBlur = event => {
       if(!this.state.name){
        alert("Please Enter Your Name")
        console.log("I am blur Event")
       }
   }
   render() {
       return (
           <div>
                <button onClick={this.handleButtonClick}>On Click </button>
                <button onDoubleClick={this.handleButtonClick}>On Double Click </button>
                <br />
                <input
                 type="text" 
                 value={this.state.name} 
                 placeholder="Enter some text" 
                 id="myInput"
                  onChange={this.handleChange}
                  onBlur={this.handleBlur}
                  onFocus={this.handleFocus}
                 
                  />
                {this.state.name && <h3>Welcome {this.state.name}</h3>}
           </div>
       )
   }
}
export default Event3;