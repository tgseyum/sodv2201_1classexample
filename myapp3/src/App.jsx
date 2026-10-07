
import { useState } from "react"
import Counter from "./comp/Counter"
import ShoppingCart from "./comp/ShoppingCart"
import StudentSearch from "./comp/StudentSearch"
import Users from "./comp/Users"
 
function App() {
  //const[name, setName] = useState("Saron")
  return (
    <>
      <Counter />
      <ShoppingCart />
      <StudentSearch />
      <Users />
    </>
  )
}
export default App

