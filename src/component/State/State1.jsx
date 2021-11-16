import React, { Component } from 'react'

 class State1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0,

        }
    }
        increment =() => {
            this.setState({
                count: this.state.count + 1
            })
        }

        digcrement =() => {
            this.setState({
                count: this.state.count - 1
            })
        }
  
    
    render() {
        const {count} = this.state
        return (
            <div>
                <h1>Why do we need State</h1>
                <h1>Count = {count}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.digcrement}>-</button>
            </div>
        )
    }
}
export default State1;