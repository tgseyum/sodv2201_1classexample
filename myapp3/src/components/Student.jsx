import { useState } from "react"

function Student(props){
  const [assignment, setAssignment]= useState(0)
  return(
    <>
    <h3>Student profile</h3>
    <p>{props.name}</p>
    <p>{props.dept}</p>
    <p>{props.address}</p>
    <p>{props.children}</p>
    <p>{assignment}</p>
    <button onClick={()=>{setAssignment(assignment+1)}}>Completed Assignment</button>
    </>
  )
}
export default Student
