import React, { Component } from 'react'

 class UncontrolledFrom extends Component {
   state ={
       name: '',
       email: '',
       password: ''
   }
   handleChange = event => {
       this.setState({
           [event.target.name]: event.target.value
       })
   }

    handleSubmit = event =>{
        event.preventDefault()
                   
            console.log(this.state);
            event.target.reset();
            this.setState({name:'',email:'',password:''})
    }
    render() {
        const {name, email, password} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} className="form-control w-50 mx-auto" value={name} name="name" placeholder="Your Name"/>
                    <input type="email" onChange={this.handleChange} className="form-control w-50 mx-auto" name="email" value={email} placeholder="Your Email"/>
                    <input type="password" onChange={this.handleChange} className="form-control w-50 mx-auto" name="password" value={password} placeholder="Your password"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default UncontrolledFrom;