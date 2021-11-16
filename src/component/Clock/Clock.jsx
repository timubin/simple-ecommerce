import React, { Component } from 'react'

 class Clock extends Component {
   state={
        date: new Date(), 
        locale: "bd-BD",
        };


     componentDidMount(){
         this.clockTimer=setInterval(()=> this.tick(), 1000)
     }

     componentWillUnmount(){
         clearInterval(this.clockTimer);

     }

     handleClick =()=>{
         this.setState({
             locale:"en-US"
         })
     }

     tick(){
         this.setState({
             date:new Date(),
         });
     }
    render() {
        const {date , locale} = this.state;
        return (
            <div>
                <h1 className="heading">
                    <span>{date.toLocaleTimeString(locale)}</span>
                </h1> 
                <button onClick={this.handleClick}>Click here</button>
            </div>
        )
    }
}
export default Clock;