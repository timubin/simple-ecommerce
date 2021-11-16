import "./Style.css"
import React, { Component } from 'react'

export class CounterClass extends Component {
   state = {
       counter: 0
   }

   incerment = () => {
    this.setState({
        counter : this.state.counter + 1
    })
}

  digrincerment = ()=>{
    this.setState({
        counter : this.state.counter - 1
    })
}
    render() {
        return (
            <div>
                <button className="counter-button " onClick={this.incerment}>+

                </button>
                <span className="counter">{this.state.counter}</span>

                <button className="counter-button " onClick={this.digrincerment}>-

                </button>
            </div>
        )
    }
}

export default CounterClass
