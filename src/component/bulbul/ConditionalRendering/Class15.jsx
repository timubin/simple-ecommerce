import React, { Component } from 'react'

 class Class15 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isUser: false,
        }
    }
    
    render() {
        /* if(this.state.isUser){
        return (
            <div>
                <h1>Hellow User</h1>
            </div>
        )
    }else {
        return(
            <div>
                <h1>Hellow Guest</h1>
            </div>
        )
    }
} */


/* let meg;
if(this.state.isUser){
meg = <div>Hellow User</div>
} else {
meg = <div>Hellow Guest</div>
}
return(
    <div>{meg}</div>
) */

return this.state.isUser ? <div>Hello User</div> : <div>Hello Guest</div>

}
 }

export default Class15;