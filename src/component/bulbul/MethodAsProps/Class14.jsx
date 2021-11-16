import Child from "./Child";
import React, { Component } from 'react'

class Class14 extends Component {
  constructor(props) {
      super(props)
  
      this.state = {
           message: "User"
      }
      this.greting = this.greting.bind(this)
  }
  greting(){
      alert("Hello" + this.state.message)
  }
    render() {
        return (
            <div>
                <Child gretingMethod={this.greting} />
            </div>
        )
    }
}

export default Class14;