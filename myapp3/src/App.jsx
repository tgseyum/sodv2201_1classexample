
import { useState } from "react"
import Counter from "./comp/Counter"
import ShoppingCart from "./comp/ShoppingCart"
import StudentSearch from "./comp/StudentSearch"
import Users from "./comp/Users"
import StudentStatus from "./comp/StudentStatus"
import Course from "./comp/Course"
import ShoppingCart1 from "./comp/ShoppingCart1"
import ShoppingCart2 from "./comp/ShoppingCart2"
  
function App() {
  //const[name, setName] = useState("Saron")
  return (
    <>
      <Counter />
      <ShoppingCart />
      <StudentSearch />
      <Users />
      <StudentStatus />
      <Course />
      <ShoppingCart1 />
      <ShoppingCart2 />
     </>
  )
}
export default App

