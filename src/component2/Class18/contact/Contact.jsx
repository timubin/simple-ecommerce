import React from 'react'
import { useState } from 'react/cjs/react.development';
import { useForm } from "react-hook-form";
import {validationEmail} from "../utils/Pattren"
function Contact(props) {

    const {label = "Contact Us"} = props.label;

    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const [subject, setSubject ]= useState("");
    const [name, setName ]= useState("");
    const [email, setEmail ]= useState("");
    const [reason, setReason ]= useState("");
    const [message, setMessage ]= useState("");
    const [terms, setTerms ]= useState("");

    const reasons = [
        {value : "account_inactive" , label: "Account Inactive"},
        {value : "account_active" , label: "Account Active"},
        {value : "account_ban" , label: "Account Ban"},
        {value : "Other" , label: "Other"},
    ]

   const inputChange =(stateName, stateValue) => {
      switch (stateName) {
        case "subject" :
        setSubject(stateValue);
        break;

        case "name" :
        setName(stateValue);
        break;

        case "email" :
        setEmail(stateValue);
        break;

        case "reason" :
        setReason(stateValue);
        break;

        case "message" :
        setMessage(stateValue);
        break;

        case "terms" :
        setTerms(stateValue);
        break;
        
        default :
        break;
      }
    }
    const onSubmitContactForm = () => {
      alert ("submiting Contact Form")
    }





    return (
        <div className="card card-body p-5 m-5">
            <h3 className="mb-4">{label}</h3>

<form onSubmit={handleSubmit(onSubmitContactForm)}>

  <div class="mb-3">
    <label for="exampleInputSubject" class="form-label">Subject</label>
    <input
     type="text"
     class="form-control"
     placeholder="Enter Subject" 
     onChange={e => inputChange("subject", e.target.value)}
     /* className={errors.subject && 'is-invalid' } */
    {...register("subject", {
      required: true,
      minLength:4,
      maxLength:50 })}
     
    />
    
     {
     errors.subject && 
     <span className="text-danger">
       {errors.subject.type === "required" && "Please give subject"}
       {errors.subject.type === "minLength" && "Please give subject minimum of 5 characters"}
       {errors.subject.type === "maxLength" && "Please give subject maximum of 50 characters"}
       </span>
     }
  </div>

  <div class="mb-3">
    <label for="exampleInputName" class="form-label">Name</label>
    <input 
    type="text" 
    onChange={e => inputChange("name", e.target.value)} 
    class="form-control" 
    placeholder="Enter Name"
    /* className={errors.subject && 'is-invalid' } */
    {...register("name", {
      required: true,
      minLength:4,
      maxLength:50 })}
     
    />
     {
     errors.name && <span className="text-danger">
       {errors.name.type === "required" && "Please give subject"}
       {errors.name.type === "minLength" && "Please give subject minimum of 5 characters"}
       {errors.name.type === "maxLength" && "Please give subject maximum of 50 characters"}
       </span>
     }
   

    
  </div>

  <div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input 
    
    type="email"  
    onChange={e => inputChange("email", e.target.value)} 
    class="form-control" 
    placeholder="Enter Email" 

        /* className={errors.subject && 'is-invalid' } */
        {...register("email", {
          required: true,
          pattern:validationEmail
          })}
         
        />
         {
         errors.email && <span className="text-danger">
           {errors.email.type === "required" && "Please give Email"}
           {errors.email.type === "pattern" && "Please give valid Email"}
           
           </span>
         }
    
   

    
  </div>

  <div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Reasuns</label>
  <select  
  class="form-select"
   onChange={e => inputChange("reason", e.target.value)}aria-label="Default select example"
    
    {...register("reason", {
      required: true,
       })}
     
    >
 
  {/* <option selected>{reasons}</option> */}
  <option selected>Selected</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>

 </select>
 {
     errors.reason && <span className="text-danger">
       {errors.reason.type === "required" && "Please give reason"}
      
       </span>
     }
 </div>
 

 <label for="exampleInputEmail1" class="form-label">Message</label>
 <div class="form-floating mb-3">
  <input
  class="form-control"
  onChange={e => inputChange("message", e.target.value)}
  {...register("message", {
    required: true,
    minLength:4,
    maxLength:150 })}
   
  />
   {
   errors.message && <span className="text-danger">
     {errors.message.type === "required" && "Please give subject"}
     {errors.message.type === "minLength" && "Please give subject minimum of 5 characters"}
     {errors.message.type === "maxLength" && "Please give subject maximum of 150 characters"}
     </span>
   }

</div>

<div class="form-check">
  <label class="form-check-label" for="flexCheckDefault">
    Read Terms and Service
  </label>
  <input class="form-check-input"
  type="checkbox"

  onChange={() => inputChange("terms", terms ? false : true)} 
       {...register("terms", {
        required: true,
        
        })}  
      />
       {
       errors.terms && <span className="text-danger">
         {errors.terms.type === "required" && "Please give terms"}    
         </span>
       }

</div>

  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </div>
    )
}

export default Contact
