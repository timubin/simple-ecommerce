 /*   import React from 'react' */
   
//1s mathod 

/*    const Class11 = ({brand , color}) => {
       return (
           <div>
               <h1>My Mobile is {brand} And Color is {color}</h1>
           </div>
       )
   } */

   //2nd mathod

/*    const Class11 = (props) => {
       const {brand , color} = props
    return (
        <div>
            <h1>My Mobile is {brand} And Color is {color}</h1>
        </div>
    )
} */

import React, { Component } from 'react'

class Class11 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hellow"
        }
    }
    
    render() {
        const {brand , color} = this.props
        const {message} = this.state
        return (
            <div>
                <h1>{message}</h1>
                <h2>My Mobile is {brand} And Color is {color}</h2>
            </div>
        )
    }
}






   export default Class11
   