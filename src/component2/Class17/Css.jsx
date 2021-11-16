import React from 'react'
import './Style.css'

function Css() {
    const style =  {
objeceCss : {
        color:"#532",
        fontSize:"25px",
        backgroundColor:"#446"}      
    }



    return (
        <div className="condition">
            <h3 className="bg-info">Bootstrap from React</h3>
            <h3 style={style.objeceCss}>Object css from React</h3>
              <div className="box">
                  <h4>I am external css from my folder</h4>
                  <p style={{fontSize:"18px", fontFamily:"roboto" }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero dolorum blanditiis molestias repudiandae, voluptatum nam aut cum? Nihil vitae aspernatur nobis! Vero ea debitis molestias ipsam doloremque neque consequuntur quia veniam laudantium dolore. Sapiente suscipit unde excepturi quae, id autem ea corrupti. Rem, sequi reprehenderit sed adipisci amet quidem.</p>
                 
               </div> 
        </div>
    )
}

export default Css
