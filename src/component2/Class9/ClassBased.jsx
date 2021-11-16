import React, { Component } from 'react'

 class ClassBased extends Component {
   
   state = {
       name: "Tarikul Islam Mubin",
       level: "Intermediate",
       age : 25,

       address:{
           house:"8/ka",
           city:"Dhaka"
       },
       skill : ["Html ", " Css "," JavaScirpt"]

   }
   
    changeLavel= () => {
        if(this.state.level === "Intermediate"){
            this.setState({          
                level: 'Advance',
                skill: ["Php","java","C++"]
                
            }) 
        }else{
            this.setState({          
                level: 'Intermediate',
                skill:  ["Html ", " Css "," JavaScirpt"]
                
            })
        }

   }
   
    render() { 
        return (
            <>
                <h2>My name is: { this.state.name } My age is: {this.state.age}</h2>
                <h3> Lavel : <mark>{this.state.level}</mark></h3>
                <h4> My favorite Programings :</h4>
                {
                    this.state.skill.map((skill , index)=>(
                        <li key={index}>{skill}</li>
                    )
                    )
                }
               <address>My address is {this.state.address.house }<br/>{this.state.address.city}</address> 
               <button onClick={this.changeLavel}>
                   Change Label
                </button>
            </>

            
        )
    }
}
export default ClassBased;