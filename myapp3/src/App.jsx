import {BrowserRouter, Routes,  Link , Outlet, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Course from "./pages/Course"
import Navigation from "./pages/Navigation"
import Topics from "./pages/Topics"
import CourseDetail from "./pages/CourseDetail"
 function App() {
   return (
    <>
    <h3>Routing exmaple</h3>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path ="/about" element={<About />} />
        <Route path="/course" element={<Course/>}> /topics
          <Route path="topics" element={<Topics />}/>
          <Route path="coursedetail" element={<CourseDetail />} />
        </Route>
      </Routes>
    
    
    </BrowserRouter>
     
     </>
  )
}
export default App

