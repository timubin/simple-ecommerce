import TextInput from "./TextInput"
import PropTypes from 'prop-types'
const Form = ({values , agreement,errors, handleChange, handleAgrement, handleSubmit}) =>{
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <TextInput 
                className='form-group w-50 mx-auto'
                name="Name"
                label="Name"
                placeholder = "Your Name"
                value={values.name} 
                error={errors.name}
                onChange={handleChange}
                
                />

            <TextInput 
                name="Email"
                label="Email"
                placeholder = "Your Email"
                className='form-group w-50 mx-auto'
                value={values.email} 
                error={errors.email}
                onChange={handleChange}
                
                />

            <TextInput 
                name="Password"
                label="Password"
                placeholder = "Your Password"
                className='form-group w-50 mx-auto'
                value={values.password} 
                type="password"
                error={errors.password}
                onChange={handleChange}
                
                />

                <TextInput 
                name="birthDate"
                label="birthDate"
                placeholder = "Your birthDate"
                className='form-group w-50 mx-auto'
                value={values.birthDate} 
                error={errors.birthDate}
                onChange={handleChange}
                
                />
                <div className="form-group">
            <label>
                <input type="radio" name='gender' value='Male' onChange={handleChange}/> Male
            </label>

            <label>
                <input type="radio" name='gender' value='Female' onChange={handleChange}/> Female
            </label>
                </div>
                <div className='form-group'>
                <input type="checkbox" name="agreement" checked={agreement} onChange={handleAgrement} /> I Agreement   
                </div>
                <button className="btn btn-primary" type='submit' disabled={!agreement}>Creat User</button>
            </form>
        </div>
    )
}
Form.propTypes={
    value:PropTypes.object.isRequired,
    agreement:PropTypes.bool.isRequired,
    errors:PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleAgrement: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}

export default Form;