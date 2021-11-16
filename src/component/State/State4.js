import React, { Component } from 'react'

 class State4 extends Component {
     state = {
         count: 0
     };
     intervelId= null

     incrementCount = ()=>{
         this.setState({count: this.state.count + 1});
     }

     decrementCount = ()=>{
       if(this.state.count > 0){
        this.setState({count: this.state.count - 1});
       }
    };

    startTimer = ()=>{
        if(this.state.count > 0 && !this.intervelId){
    this.intervelId = setInterval(() => {
        this.setState({count: this.state.count - 1}, ()=>{
            if(this.state.count ===0){
                alert("Timer Finished")
                clearInterval(this.intervelId)
                this.intervelId = null
            }
        })
    }, 1000);
        }
    };

    stopTimer =()=>{
        if(this.intervelId){
            clearInterval(this.intervelId)
            this.intervelId = null;
        }
    }

    resetTimer = ()=> {
        this.setState({count: 0});
        clearInterval(this.intervelId);
        this.intervelId = null;
    }
    render() {
        return (
            <div>
                <h1>Simple Timer</h1>
                <div>
                     <button onClick={this.decrementCount}>-</button>
                     <h2>{this.state.count}</h2>
                     <button onClick={this.incrementCount}>+</button>
                </div>
                <div>
                    <button onClick={this.startTimer}> Start</button>
                    <button onClick={this.stopTimer}> Stop</button>
                    <button onClick={this.resetTimer}> reset</button>
                </div>
            </div>
        )
    }
}
export default State4;