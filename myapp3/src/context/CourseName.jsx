import { useContext } from "react"
import { CourseContext } from "./NameContext"
function CourseName(){
    const cname = useContext(CourseContext)
    return(
        <div>
            <p>Course name {cname.courseName}</p>
        </div>
    )
}
export default CourseName