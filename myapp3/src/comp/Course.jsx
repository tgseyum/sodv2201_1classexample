function Course(){
    const courses = [ "React", "JavaScript",  "Node.js"];
    return(
        <>
            <h1>Course list</h1>
            {courses.map((course, index)=> { return <li key={index}>{course}</li> })}
        </>
    )
}
export default Course