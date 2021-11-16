import React from 'react'
import Person from "./Persone"

const Class16 = () => {

    const persons = [ {
        id:1,
        name: "Masbha",
    },
    {
        id:2,
        name: "Polash",
    },
    {
        id:3,
        name: "Mizan" ,
    },
    {
        id:4,
        name: "Akas" ,
    },
    ]
     
    return (
        <div>

        { persons.map((person)=> {
            return (
                <div key={persons.id}>
                    <Person  person={person} />
                    
                </div>
            )
        }) }

         {/*  {  persons.map((persons) => {
                return(
                    <div>
                        <h2>{persons}</h2>
                    </div>
                )
            })
} */}

        




           {/*  <h2>{persons[0]}</h2>
            <h2>{persons[1]}</h2>
            <h2>{persons[2]}</h2>
            <h2>{persons[3]}</h2>
            <h2>{persons[4]}</h2> */}
            
           {/*  <select >
                <option value="">{persons[0]}</option>
                <option value="">{persons[1]}</option>
                <option value="">{persons[2]}</option>
                <option value="">{persons[3]}</option>
                <option value="">{persons[4]}</option>
            </select> */}


        </div>
    )
}

export default Class16
