import React from 'react'

import PropTypes from 'prop-types';
/* import React, { Component } from 'react' */

const TextInput = props =>(
    <div className='form-group'>

        <label htmlFor={props.name}>{props.label}</label>
       
        <input 
        className="form-control w-50 mx-auto"
        type={props.type} 
        name={props.name}
        id={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        />


    </div>

);
TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label:PropTypes.string.isRequired, 
    type:PropTypes.string.isRequired, 
    placeholder:PropTypes.string.isRequired, 
    value:PropTypes.string.isRequired, 
    onChange: PropTypes.func.isRequired
};
TextInput.defaultProps = {
    type: "text",
    label: "",
    placeholder: ""
}

const Form = props =>(
<form onSubmit={props.handleSubmit}>
            <TextInput
            name="name"
            label="Enter Name"
            placeholder="Your Name"
            value={props.values.name}
            onChange={props.handleChange}
            />
             <TextInput
            name="email"
            type="email"
            label="Enter email"
            placeholder="Your email"
            value={props.values.email}
            onChange={props.handleChange}
            />
             <TextInput
            name="password"
            type="password"
            label="Enter password"
            placeholder="Your password"
            value={props.values.password}
            onChange={props.handleChange}
            />
            <button type="submit">Submit</button>
        </form>
);
Form.propTypes = {
    values: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}


class FromFunction extends React.Component {
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
         return (
             <div>
        
                     <Form
                      type="text"
                      value={this.state}
                       handleChange={this.handleChange}
                       handleSubmit={this.handleSubmit}
                />


             </div>
         )
     }
 }












export default TextInput;