import React, { Component } from 'react'

 class UncontrolledFrom extends Component {
    handleSubmit = event =>{
        event.preventDefault()
        const data = {}
            data.name = event.target.name.value
            data.email = event.target.email.value
            data.password = event.target.password.value
            console.log(data);
            event.target.reset();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className="form-control w-50 mx-auto" name="name" placeholder="Your Name"/>
                    <input type="email" className="form-control w-50 mx-auto" name="email" placeholder="Your Email"/>
                    <input type="password" className="form-control w-50 mx-auto" name="password" placeholder="Your password"/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
export default UncontrolledFrom;