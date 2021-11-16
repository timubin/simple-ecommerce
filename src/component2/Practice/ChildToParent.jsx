import React from 'react'

function ChildToParent(props) {

   /*  const changeCity = () => {
        props.cahngeCityFormParent()
    } */
    

   const changProgramingLanguages = (index) => {
    const programingLanguges =  props.pl.filter((item, Idx) => index !== Idx);
    props.setProgramingLanguges(programingLanguges);
    }

    return (
        <div>
            <div>
            <address>
           Village: {props.address.village} <br/> 
           City :{props.address.city} <br/>    
           Country :{props.address.country} <br/>   
        </address>
            </div>
        
            <button onClick={props.cahngeCityFormParent}>Change City</button>
            <button onClick={() => props.cahngeCityFormParentDynacic("My City")}>
                Change City Dynamic
            </button>

            <div>
                <h4>Programing Languges</h4>
                {
                        props.pl.map((p, index) => (
                        <li key={index} onClick={() =>changProgramingLanguages(index)}>{p}</li>
                        ))
                }

   

            </div>
        </div>
    )
}

export default ChildToParent
