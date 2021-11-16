
import { useState } from 'react';
import ChildToParent from './ChildToParent';
import PropsChild from './PropsChild';
import NewCounter from './NewCounter';

function PropsParent() {

    // parent to Child Compunend start
    const myArray = ["Apple, " , "Nokia, ", "Huawia ,", "Samsung " ];
    
    const MyObject = 
        {
            Name: "Mubin",
            Age: 25,
            Skill: "Htlm css jqure"
        }
   
 

    const myFunction = () =>{
        alert("I am function")
    }

// parent to Child Compunend End

const [address , setAddress] = useState({
    village : "Dhaka 1212",
    city : "Dhaka",
    country: "Bangladesh"
})

const cahngeCityFormParent = () => {
    setAddress ({
        village : "Dhaka 1212",
         city : address.city == "Dhaka" ? "Brishal" : "Dhaka",
        country: "Bangladesh"
    })
}

const cahngeCityFormParentDynacic = (value) => {
    setAddress ({
        village : "Dhaka 1212",
         city : address.city == "Dhaka" ? value : "Dhaka",
        country: "Bangladesh"
    })
}



const [programingLanguges , setProgramingLanguges] = useState([
    "JavaScrip",
    "React",
    "PhP"
])

const [counter , setCounter] = useState(0);
    return (
        <div>
            
            <PropsChild
            myArray={myArray}
            MyObject={MyObject}
            myFunction={myFunction}

            />

        <h2>This is Child to Parient </h2>
        <ChildToParent
         address = {address}
         cahngeCityFormParent={cahngeCityFormParent} 
         cahngeCityFormParentDynacic={cahngeCityFormParentDynacic} 
         pl = {programingLanguges}
         setProgramingLanguges = {setProgramingLanguges}
        
         
         />

        <NewCounter
        counter= {counter}
        setCounter= {setCounter}
        />
        </div>
    )
}

export default PropsParent
