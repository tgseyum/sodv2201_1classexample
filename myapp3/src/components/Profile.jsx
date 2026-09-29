import { useState } from "react"

function Profile(){
    const[name, setName]=useState("")
    const [address, setAddress]=useState("")

    const [submittedName, setSubmittedName]=useState("")
    const [submittedAdress, setSubmittedAddress]=useState("")
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(name, address)
        setSubmittedName(name)
        setSubmittedAddress(address)
    }
    return(
        <>
            <h1>Simple profile form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} name="name" onChange={(e)=>setName(e.target.value)} />
                <input type="text" value={address} name="address" onChange={(e)=>setAddress(e.target.value)} />
                <button type="submit">submit</button>
            </form>
            <p>
                Name :{name} 
            </p>
            <p>  Address :{address}</p>
            <h2>Profile info after submit</h2>
               <p>
                Name :{submittedName} 
            </p>
            <p>  Address :{submittedAdress}</p>
        </>
    )
}
export default Profile
