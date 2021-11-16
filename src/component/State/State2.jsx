import React, { Component } from 'react'

 class State2 extends Component {
    state = { time: new Date()}; //constructor er sortcart
  
 /*    constructor(props){
       super(props);
       this.state = { time: new Date()}
   } */

   componentDidMount(){
       this.clockTimer = setInterval(()=> this.tick(),1000)

   }
   componentWillUnmount(){
       clearInterval(this.clockTimer)
   }
   tick(){
    this.setState({
        time: new Date(),
    });
   }
    render() {
        return (
            <div>
                <h1>{this.state.time.toLocaleTimeString()}</h1>
            </div>
        )
    }
}
export default State2;