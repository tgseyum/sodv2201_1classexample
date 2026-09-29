import { useState } from "react"

function Profile2() {
    const [profile, setProfile] = useState({ id: " ", name: "", address: "", email: "" })
    
    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(profile.name, profile.address)
        
    }
    return (
        <>
            <h1>Simple profile form</h1>
            <form onSubmit={handleSubmit}>
                Enter an ID <input type="text" value={profile.id} name="id" onChange={handleChange} placeholder="Enter ID" />

                Enter Name <input type="text" value={profile.name} name="name" onChange={handleChange} />
                Enter Address<input type="text" value={profile.address} name="address" onChange={handleChange} />
                Enter email  <input type="text" value={profile.email} name="email" onChange={handleChange} />

                <button type="submit">submit</button>
            </form>
            <p>ID :{profile.id}</p>
            <p>
                Name :{profile.name}
            </p>
            <p>  Address :{profile.address}</p>
            <p>Email :{profile.email}</p>
             
        </>
    )
}
export default Profile2
