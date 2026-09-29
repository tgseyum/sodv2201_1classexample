import { useState } from "react"

function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState(" ")

    const [contact, setContact] = useState({ name: "", email: "", phone: "" })

    const handleChange = (event) => {
        setContact({ ...contact, [event.target.name]: event.target.value })
    }

    const [contacts, setContacts] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault();
        setContacts([...contacts, contact])

        console.log(contacts)
        setContact({ name: "", email: "", phone: "" })

    }

    return (
        <>
            <h1>Contact Form</h1>
            <h2>Object state</h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={contact.name} name="name" onChange={handleChange} />
                    <input type="text" value={contact.email} name="email" onChange={handleChange} />
                    <input type="text" value={contact.phone} name="phone" onChange={handleChange} />
                    <button type="submit" >Andd contact</button>
                </form>
                <h2>Name {contact.name} </h2>
                <p>Phone {contact.phone}</p>
                <p>Email {contact.email}</p>

            </div>

            <div>
                <form>
                    Name  <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                    Email <input type="text" value={email} onChange={(event) => { setEmail(event.target.value) }} />
                    Phone <input type="text" value={phone} onChange={(event) => { setPhone(event.target.value) }} />
                </form>
                <h2>Name {name} </h2>
                <p>Phone {phone}</p>
                <p>Email {email}</p>
            </div>
            {contacts.map((c, index) => {
                return (
                    <p key={index}>
                        {index + 1} Name: {c.name}, Email: {c.email}, Phone: {c.phone}
                    </p>
                )
            })}
            {/* <p>
                {contacts.map((c, index) => {
                    <p key={index}> {index + 1} Name : {c.name} , Email{c.email} , phone:{c.phone} </p>
                })}

            </p>

            {contacts.map((c, index) => {
                <p key={index}>
                    {index + 1} Name : {c.name}, Email {c.email}, phone: {c.phone}
                </p>
            })} */}

        </>
    )
}

export default Contact;