import { useState } from "react"
function Counter(){
    const [count, setCount] = useState(0)
    return(
        <>
        <h2>My counter app</h2>
        <p>{count}</p>
        <button onClick={()=>{setCount(count+1)}}>Add by one</button>
        </>
    )
}

export default Counter