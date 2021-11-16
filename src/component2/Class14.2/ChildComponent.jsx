import React from 'react'

function ChildComponent(props) {

  const changeName=()=>{
    props.changeNameFormParent();
    }

    const changeArrayName = (index) => {
       /*  const allName = props.name;
        allName.splice(index , 1); */

      const allName=  props.name.filter((item, Idx) => index !== Idx)
      props.changeArrayName(allName)
        
    }
    return (
        <div>
            <div>
            <h2>{props.name}</h2>
            <h3>{props.address.myName}</h3>
            <h3>{props.address.myAge}</h3>
            <h3>{props.address.myMobel}</h3>
            </div>
         
        
        <button onClick={changeName}>Name Change</button>

        <button onClick={()=>props.changeNameFormParentDynamic("My Name")}>
            Change Name dynamic
        </button>

        <button onClick={()=>props.name(["New Name" , "karap" , "Bhalo"])}>
            Change Name Array
        </button>
            <div>
                <h5>This is Array</h5>
                { props.name.map((arryName, index) =>
           (
               <li key={index} onClick={() => changeArrayName}>{arryName }</li>
           )
           
           )}
            
            </div>
      
     
               
            
        </div>

       
    )
}

export default ChildComponent;
