import React , {useState} from 'react'

function FunctionalComponent() {
  /*   const userAdress = {
        house: "174/b",
        city: "Dhaka"
    }
     */
    const [name , setName] = useState ("Mubin")
    const [ age , setage] = useState(25)
    const [ level , setLevel] = useState("Intermidead")
    const [ skill , setSkill] = useState(["JavaScript ," , " PHP, ", " C++"])
    const changeLevel =()=>{
        if (level == 'Intermidead'){
            setLevel("Advanced")
        }else{
            setLevel("Intermidead")
        }
        
    }
    return (
        <div>
            <h2>My name is: {name} my age is :{age}</h2>
            <h3>Level : {level}</h3>
            <h4>Skill : {skill}</h4>
            <button onClick={changeLevel}>
                Change Leavel
            </button>
        </div>
    )
}

export default FunctionalComponent
