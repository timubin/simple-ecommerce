import React, { Component } from 'react'

 class State3 extends Component {
    
    render() {
        this.state={
            count: 0,
        }
        /* function UpdateCount (){
            this.setState ({count: this.state.count + 1});

        } */
        return (
            <div>
                <h1>Count = {this.state.count }</h1>
                <button onClick={() => {
                    this.setState(
                        prev => {
                            return {
                                count: prev.count + 1
                            };
                        },
                       
                    ); 
                    
                }}>Add +1</button>
            </div>
        )
    }
}
export default State3;