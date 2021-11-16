import React, { Component } from 'react'

 class Checkbox extends Component {
    state={
        name : '',
        country:'',
        bio:'',
        birthDay:'',
        gender: '',
        agree: false,
        skills: []
    }
    handleChange = event => {
        this.setState({
            [event.target.name]:
             event.target.value
        })

    }
    handleCheckBox = event => {
        this.setState({
            agree: event.target.checked
        })
    }
    handleSkillChange = event =>{
        if(event.target.checked){
            this.setState({
                skills: [... this.state.skills,event.target.value]
            })
        }else{
            const skills = this.state.skills.filter(skill=>skill != event.target.value)
            this.setState({skills})
        }
    }
    render() {
        const {name, country,bio,birthDay, agree, skills} = this.state;
        return (
            <div className='w-50 mx-auto' >
                <h2>Type Your Message</h2>
             <input type="text" name='name' className='form-control my-2' placeholder="Your Name" value={name} onChange={this.handleChange} />
            <select className='form-control my-2' name='country' value={country} onChange={this.handleChange}>
                <option value="Bangladesh">Bangladesh</option>
                <option value="India">India</option>
                <option value="Srilanka">Srilanka</option>
                <option value="Pakistan">Pakistan</option>
                <option value="China">China</option>
            </select>
            <textarea className='form-control my-2' name="bio" placeholder='Tall me about Yorrself' onChange={this.handleChange} value={bio}></textarea>
            <input className='form-control my-2' type="date" name='birthDay' value={birthDay} onChange={this.handleChange}/>
            <div class="btn-group btn-group-toggle" >
            <label class="btn btn-secondary">
                <input type="radio" name="gender" value='Male' autocomplete="off" onChange={this.handleChange}/>Male
                </label>
                <label class="btn btn-secondary">
                <input type="radio" name="gender" value='Female' autocomplete="off" onChange={this.handleChange}/>Female
                </label>
                <label class="btn btn-secondary">
                <input type="radio" name="gender" value='Other' autocomplete="off" onChange={this.handleChange}/>Other
                </label>
            </div>
            <div>
                Skill: <br />
                <input type="checkbox" name="skills" value="Java" checked={skills.includes("Java")} onChange={this.handleSkillChange}/> Java
                <input type="checkbox" name="skills" value="JavaScript" checked={skills.includes("JavaScript")} onChange={this.handleSkillChange}/> JavaScript
                <input type="checkbox" name="skills" value="Python" checked={skills.includes("Python")} onChange={this.handleSkillChange}/> Python
                <input type="checkbox" name="skills" value="GoLang" checked={skills.includes("GoLang")} onChange={this.handleSkillChange}/> GoLang
            </div>
            <br />
            <div>
                <input type="checkbox" name="agree" checked={agree} onChange={this.handleCheckBox} /> I agree to all the terms and condition
            </div>
            <button onClick={()=>{console.log(this.state)}}>Show Data</button>
            </div>
        )
    }
}
export default Checkbox;
