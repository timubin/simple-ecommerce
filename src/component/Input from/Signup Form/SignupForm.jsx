import Form from './Form'
import React, { Component } from 'react'
const initValues = {
    name: '',
    email: "",
    password:"",
    birthDate:"",
    gender:""
}
 class SignupForm extends Component {
     state={
         values : initValues,
         agreement:false,
         errors:{}

     }  

     handleChange = event =>{
         this.setState({
             values: {
                 ...this.state.values,
                 [event.target.name] : event.target.value
             }
         })
     } 
     handleAgrement = event =>{
         this.setState({
             agreement: event.target.chacked
         })
     }
     handleSubmit=event =>{
         event.preventDefault()
        const {isValid, errors } = this.validate()

        if(isValid){
            console.log(this.state.values);
            event.target.reset();
            this.setState({values: initValues,agreement: false});
        }else{
            this.setState({errors})
        }
         
     }

validate=()=>{
    const errors = {}
    const {values:{name,email,password,gender,birthDate}}=this.state
    if(!name){
        errors.name ="Please Provide Yuor Name"
    }
    if(!email){
        errors.email ="Please Provide Yuor Name"
    }
    if(!password){
        errors.password="Please Provide Your Password"
    }
    if(!birthDate){
        errors.birthDate="Please Provide Your Birth Date"
    }
    if(!gender){
        errors.gender="Please Provide Your Gender"
    }
    return{
        errors,
        isValid: Object.keys(errors).length===0
    }
}
    render() {
        return (
            <div>
                <h1>Singup From</h1>
                <Form
                className='form-group w-50 mx-auto'
                values={this.state.values}
                errors={this.state.errors}
                agreement={this.state.agreement}
                handleChange={this.handleChange}
                handleAgrement={this.handleAgrement}
                handleSubmit={this.handleSubmit}
                
                />
            </div>
        )
    }
}
export default SignupForm;