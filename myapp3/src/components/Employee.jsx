import { useState } from "react"

export default function Employee(){
    const [employee, setEmployee] = useState([ {id:101, name:"Tom", role:"mgr"}])
    const newEmployee = {id:102, name:"Dawit", role:"Staff"}
   
    const addEmployee = ()=>{
        setEmployee([...employee,newEmployee])
    }
    console.log(employee)
//   console.log(employee)
    return(
        <>
        {/* <p>id : {employee[0].id}</p>
        <p>name: {employee[0].name}</p>
        <p>role : {employee[0].role}</p>
         */}
        <p>
            {employee.map((e)=>(
                <div>
                    <p>id :{e.id}</p>
                    <p>name :{e.name}</p>
                    <p>role :{e.role}</p>
                </div>
            ))}
        </p>
        <button onClick={addEmployee}>Add Employee</button>
        </>
    )
}