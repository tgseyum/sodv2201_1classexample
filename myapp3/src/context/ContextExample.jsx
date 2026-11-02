import {  useContext } from "react";
 import { NameContext } from "./NameContext";
 import { CourseContext } from "./NameContext";
 import DeisplayName from "./DisplayName";
 import CourseName from "./CourseName";
function ContextExample(){
   
    return(
        <div>
         <NameContext.Provider value={{fullanme:"Tom David"}}>
                <DeisplayName /> 
         </NameContext.Provider>

         <CourseContext.Provider value={{courseName:"React"}}>
            <CourseName />
         </CourseContext.Provider>

        </div>
    )
}
export default ContextExample