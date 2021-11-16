import React, { Component } from 'react'

class MyFrom extends Component {
    state={
        name: "",
        email: "",
        password: ""
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
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" onChange={this.handleChange} placeholder='Name' value={this.state.name} />
                    <input type="email" name="email" onChange={this.handleChange} placeholder='email' value={this.state.email} />
                    <input type="password" name="password" onChange={this.handleChange} placeholder='Password' value={this.state.password}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default MyFrom;
