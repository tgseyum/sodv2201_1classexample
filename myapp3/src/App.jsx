import {BrowserRouter, Routes,  Link , Outlet, Route} from "react-router-dom"

import ContextExample from "./context/ContextExample"
 function App() {
   return (
    <>
    {/* <h3>Routing exmaple</h3>
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
      */}
      <ContextExample />
     </>
  )
}
export default App

