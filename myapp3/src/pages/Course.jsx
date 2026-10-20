import { Link , Outlet} from "react-router-dom"
import CourseCard from "./CourseCard"
function Course(){
    return(
        <>
            <h2>Course page</h2>
            <div>
                <Link to="topics">Topics</Link> {" | "}
                 <Link to="coursedetail">Course Detail</Link>
            </div>
            <Outlet/>
            <p>You can get course info here</p>
            <CourseCard />
            <CourseCard />
        </>
    )
}
export default Course