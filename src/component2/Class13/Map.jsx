import React, {useEffect} from 'react'
import testUtils from 'react-dom/test-utils'
import "./Style.css"

const Map = () => {
 /*    const tasks = [
        "Fist Task ",
        "Second Task",
        " Third Task"

    ] */

    const tasks1 =[ 
    { id: 1,
        title: "Complite Map() of JavaScript",
        status: "Done"
    },

    {
        id: 2,
        title: "Display List in View",
        status: "pending"
    },
    {
        id: 3,
        title: "for, for eatch ",
        status: "okkk"
    },
]

 /*    useEffect(() => {
       for (let Index = 0; Index<tasks.length; Index++) {
           const task = tasks[Index];
           document.write("For Task =" + Index + task + "<br />")
       }
       
       tasks.forEach(task => {
           document.write("For Each task" + task + "</ br>")
       });

  

    }, []) */

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Title</th>
                        <th>Status</th>
                    </tr>
                </thead>
           
            <tbody>
                
                    {
                        tasks1.map((task, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{task.title}</td>
                                <td>{task.status}</td>
                            </tr>
                        
                    ))
                    }
                
            </tbody>
            </table>

                    <select>
                        
                            {tasks1.map((task , index) => (
                                <option key={index}>{task.title}</option>
                            ))}

                       
                        
                    </select>

                    <ul>
                            {
                                tasks1.map((task , index)=>(
                                    <li>{task.status}</li>
                                ))
                            }
                            </ul>
 

        
        </div>
    )
}

export default Map;