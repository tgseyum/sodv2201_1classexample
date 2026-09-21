import { useState } from "react"

function Fruits(){
    const[fruits, setFruits] = useState(["Apple", "Avocado"," banana"])
    const addNewFruit = ()=>{
        setFruits([...fruits, "pear"])
    }
    return(
        <>
          <h2>List of fruits</h2>
          <p>{fruits[0]}</p>
          <p>{fruits[1]}</p>
          <p>{fruits[2]}</p>
          <button onClick={addNewFruit}>Add fruit</button>
        </>
    )
}
export default Fruits