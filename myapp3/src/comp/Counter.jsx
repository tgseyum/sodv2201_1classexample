import { useState ,useEffect} from "react"

function Counter(){
    const[count, setCount]=useState(0)

    useEffect(()=>{},[])

    useEffect(()=>{
        console.log("always rendering...")
    })

      useEffect(()=>{
        console.log("intial rendering...")
    },[])

      useEffect(()=>{
        console.log("count updated...")
        document.title = `Count: ${count}`;
    },[count])

    return(
        <>
            <h1>Counter application</h1>
            <p>Count is {count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )
}
export default Counter