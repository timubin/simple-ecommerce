import React from 'react'
import PropTypes from 'prop-types'

const TextInput = props => (
    <div className='form-group'>
        <label htmlFor={props.name}>{props.label}</label>
        <input 
        className= {props.error ? 'Form-control is-Invalid' : 'form-control'}
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        />
        {props.error != <div className='invalid-feedback'>{props.error}</div>}

    </div>
);
TextInput.prototype ={
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onchange: PropTypes.func.isRequired,
    error: PropTypes.string,
    
    
};
TextInput.defaultProps ={
    type: 'text',
    label: '',
    placeholder:''
}

export default TextInput;