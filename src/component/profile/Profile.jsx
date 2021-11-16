import './Profile.css'
import React from 'react'
import Bio from './Bio'
import Skills from './Skills'
import Link from './Link'

function Profile(props) {
    
    return (
        <div className='Container'>
       
        <Bio name="Trikul islam Mubin" title="Fullstck JavaScript Developer, Enterepreneur And Trainer" />
        <Skills skillsA="HTML" skillsB="CSS" skillsC="JavaScript"/>
        <Link />
        

    </div>
    )
}

export default Profile;