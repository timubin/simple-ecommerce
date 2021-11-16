import React, { Component } from 'react'

 class Class9 extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Please Subscribe",
             age : 50
        }
    }
   
    changeMessage (){
        this.setState({
            message:"Thank for your Subscribe",
            age: 60,
        })
    }
    render() {
    
        return (
            <div>
                <h1>{this.state.message }</h1>
                <h2>{this.state.age}</h2>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
               
            </div>
        )
    }
}
export default Class9;