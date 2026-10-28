function Course1(props) {
    return(
    <div style={{backgroundColor:"green"}}>
    <h2>Course Name: {props.name}</h2>;
    <p>desc{props.desc}</p>
    </div> 
    )
}
 
function Courses1() {
    return (
        <div style={{backgroundColor:"gray"}}>
            <h1>Course Portal</h1>
            <Course1 name="React Development" desc="this is term3 course"/>
             <Course1 name="React Development" />
         </div>
    );
}

export default Courses1;