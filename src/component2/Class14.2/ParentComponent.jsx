import React, { useEffect, useState } from "react";

import ChildComponent from './ChildComponent'

const ParentComponent = () => {
    const name =[ "Mubin" , "Korim" , "Jobber" ]
    const [address , setAddress] =useState (
       
            {
                myName : "Mubin",
                myAge: 25,
                myMobel: "Apple"
             },
             {
                myName : "Korim",
                myAge: 27,
                myMobel: "Nokia"
             },
             {
                myName : "Jobber",
                myAge: 28,
                myMobel: "Lg"
             })


const changeNameFormParent = () => {
    setAddress ({
        myName : address.myName == "Mubin" ? "Tarikul Islam" : "Mubin",
        myAge: 25,
        myMobel: "Apple"
})
}
const changeNameFormParentDynamic = (value) => {
    setAddress ({
       
        myName : address.myName == "Mubin" ? value : "Mubin",
        myAge: 25,
        myMobel: "Apple"
})
}
    return (
        <div>
             <div className="App">
            
            <ChildComponent
             name={name}
              address={address}
               changeNameFormParent= {changeNameFormParent}
               changeNameFormParentDynamic= {changeNameFormParentDynamic}
               
               />
            <button onClick={changeNameFormParent}>Name Change</button>
        </div>
        </div>
    )
}

export default ParentComponent




