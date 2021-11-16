import React, { Component } from 'react'

 class Input1 extends Component {
    state={
        name : '',
        country:'',
        bio:'',
        birthDay:''
    }
    handleChange = event => {
        this.setState({
            [event.target.name]:
             event.target.value
        })

    }
    render() {
        return (
            <div className='w-50 mx-auto' >
                <h2>Type Your Message</h2>
             <input type="text" name='name' className='form-control my-2' placeholder="Your Name" value={this.state.name} onChange={this.handleChange} />
            <select className='form-control my-2' name='country' value={this.state.country} onChange={this.handleChange}>
                <option value="Bangladesh">Bangladesh</option>
                <option value="India">India</option>
                <option value="Srilanka">Srilanka</option>
                <option value="Pakistan">Pakistan</option>
                <option value="China">China</option>
            </select>
            <textarea className='form-control my-2' name="bio" placeholder='Tall me about Yorrself' onChange={this.handleChange} value={this.state.bio}></textarea>
            <input className='form-control my-2' type="date" name='birthday' value={this.state.birthDay} onChange={this.handleChange}/>
            <button onClick={()=>{console.log(this.state)}}>Show Data</button>
            </div>
        )
    }
}
export default Input1;
