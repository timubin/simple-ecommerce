/* import React from 'react' */

/* function Class12() {
    const clickHandel = ()=>{
        alert("Clicked")
    }
    return (
        <div>
            <button onClick={()=>clickHandel()}>Submit</button>
        </div>
    )
} */

import React, { Component } from 'react'

 class Class12 extends Component {
  clickHendelar= () => {
      alert("Cliked")
  }
    render() {
        return (
            <div>
                <button onClick={this.clickHendelar}>Click me!</button>
            </div>
        )
    }
}




export default Class12
