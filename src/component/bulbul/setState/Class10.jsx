import React, { Component } from 'react'

 class Class10 extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0,
        }
    }
    
    incement () {
        this.setState({
            count : this.state.count+1
        })
      
    }
    digcement () {
        this.setState({
            count : this.state.count-1
        })
    
    }

    
    render() {
        return (
            <div>
                <h1> Count :{this.state.count}</h1>
                <button onClick={()=> this.incement()}>+</button>
                <button onClick={()=> this.digcement()}>-</button>
            </div>
        )
    }
}
export default Class10;


