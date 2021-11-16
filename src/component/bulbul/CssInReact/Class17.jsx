import React from 'react'
import './Style.css'
 function Class17() {

     let atagcondetion= true;
    const sucess={
        color:'#fff',
        fontSize:"18px",
        padding:"0 10px"
    }

    return (
        <div className="about">
            <h3>My name is Mubin</h3>
            <p style={sucess}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ab fugiat voluptatibus tenetur consequuntur harum ducimus fuga, et corporis dolor.</p>
            <a href="#" className={atagcondetion ? 'condition' : '' }>Read More</a>
        </div>

        
    )
}
export default Class17;