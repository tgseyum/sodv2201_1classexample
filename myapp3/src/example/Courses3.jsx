import { useState } from "react";

function MessageButton3(props) {
    return <button onClick={() => props.onSendMessage("Hello from the child!")}>Send Message</button>;
}

function MessageBtn(props){

    return(
        <div>
        <h2>Child component</h2>
        <button onClick={() => props.onSendMessage("Hello from the child!")}>Send Message</button>;
        <p>{props.name}</p>

        </div>
    )
}

function Child(props){
    return(
        <div style={{border:"solid red 2px"}}>
            <button onClick={()=>props.sendgreeting("Hello my parent")}>Send</button>

        </div>
    )
}

function Goodbye(props){
    return(
        <>
            <button onClick={()=>props.goodbye("Good bye .... ")}>Goodbye</button>
        </>
    )
}

function Courses3() {
    const[message,setMessage]=useState("")
    const[greetingFromChild, setGreetingFromChild]=useState("")
    const[goodbye, setGoodby]=useState("")

    const handleMessage = (message) => { setMessage(message); };

    const handlegreeting = (greeting)=>{setGreetingFromChild(greeting)}
    const handleGoodbye = (msg)=>{setGoodby(msg)}

    return (
        <div style={{border:"solid blue 2px"}}>
            <h1>Course Portal</h1>
            <MessageBtn onSendMessage={handleMessage} name="ABC"/>

            <p>Message from child :{message}</p>

            <Child sendgreeting={handlegreeting} />
            <p>{greetingFromChild}</p>

            <Goodbye goodbye={handleGoodbye} />
            <p>{goodbye}</p>
        </div>
    );
}

export default Courses3;