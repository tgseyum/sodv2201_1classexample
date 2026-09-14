import { Course } from "./compnents/Course"
import { Student } from "./compnents/Student"

function App() { 
  return (
    <>
      <h2>Hello class</h2>
      <h2>Some content to come</h2>
      <Student dept="SD"/>
      <Student address="Ca" term="2" dept="IT" />
      <Student dept="Maths">
        <p>Course detail info for this studnet</p>
        <Course cname="LA"/>
      </Student>
      <Course cname="Web programming" />
     </>
  )
}

export default App

