
import { useState } from "react"
import Employee from "./components/Employee";
import Fruits from "./components/Fruits";
import Profile from "./components/Profile";
import Profile2 from "./components/Profile2";
import Contact from "./components/Contact";
function App() {
  //const[name, setName] = useState("Saron")
  return (
    <>
      {/* <Student />
      <h2>Employee infomration</h2>
      <Employee />
      <Fruits /> */}

      {/* <Profile />
      <Profile2 /> */}
 <Profile></Profile>
      <Contact />
    </>
  )
}
export default App

// function Student() {
//   const [student, setStudent] = useState({ id: 1, name: "Ali", dept: "SD" })

//   const { id, name, dept } = student;
//   const course = "Web programming"
//   console.log(student)
//   const addcourse = function () {
//     setStudent({
//       ...student, course: course
//     })
//   }
//   return (
//     <>
//       <h1>State variable with object and array</h1>
//       <p>Name{name}</p>

//       <p>id : {student.id}</p>
//       <p>name :{student.name}</p>
//       <p>dept : {student.dept}</p>
//       <p>course: {student.course}</p>

//       <p>id : {id} </p>
//       <p>name : {name}</p>
//       <button type="button" onClick={() => setStudent({ ...student, course: course })}>Add course</button>
//     </>
//   )
// }



