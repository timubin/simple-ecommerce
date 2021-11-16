import React, { Component } from 'react'

 class Class13 extends Component {
  constructor(props) {
      super(props)
  
      this.state = {
           message: "welcome"
      }
      this.hendelEvent= this.hendelEvent.bind(this)
  }
  hendelEvent (){
    this.setState({
        message:"Good Bay"
    })
  }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.hendelEvent}>Click</button>
            </div>
        )
    }
}
export default Class13;