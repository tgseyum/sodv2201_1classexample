import { Link } from "react-router-dom";
function Navigation(){
    return(
        <>
            <div>
                <Link to="/">Home</Link> {" | "}
                <Link to="/about">About</Link>{" | "}
                <Link to="/course">Course</Link>
            </div>
        </>
    )
}
export default Navigation