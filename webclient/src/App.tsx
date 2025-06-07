import './App.css'
import{BrowserRouter as Router,Route,Routes} from "react-router-dom";
import {Content} from "../src/pages/Content";

function App() {
  return (
    <>
      <div className="" >
            <Router>
      
              <Routes>
                <Route path="/content/:id" element={<Content/>}></Route>
              </Routes>
              
            </Router>
           </div>
    </>
  )
}

export default App
