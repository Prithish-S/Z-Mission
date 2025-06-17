import './App.css'
import{BrowserRouter as Router,Route,Routes} from "react-router-dom";
import {Content} from "../src/pages/Content";
import {Courses} from "../src/pages/Courses";

function App() {
  return (
    <>
      <div className="" >
            <Router>
      
              <Routes>
                <Route path="/content/:id" element={<Content/>}></Route>
                <Route path="/courses" element={<Courses/>}></Route>
              </Routes>
              
            </Router>
           </div>
    </>
  )
}

export default App
