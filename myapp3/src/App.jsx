
import { useState } from "react"
import { Course } from "./components/Course"
import Student from "./components/Student"
import Counter from "./components/Counter"
function App() {
 const [name, setName]= useState("Thomas")
 const [counter, setCounter]= useState(3)
  const changeName = function(){
    setName("Kaleb")
  }
  const changeName2 = ()=>{
    setName("Sara")
  }
  return (
    <>
    <h1>My react project</h1>
     {/* <Student />
     <Student name="Aron"/>
     <Student name="Alex" dept="SD"/>
     <Student name="Selam" address="ca" >
        <p>This student is star</p>
        <Course />
     </Student> */}
     <h1>REACT state</h1>
     <p>
      {name}
     </p>
     <button onClick={changeName}>Change name</button>
     <button onClick={changeName2}>Change name2</button>
     <button onClick={()=>{setName("TG")}}>Change name2</button>
     <h2>Counter app</h2>
     <p>{counter}</p>
     <button onClick={()=>{setCounter(counter+2)}}>Counte by 1</button>
    
     <Counter />
    </>
  )
}

export default App

