import { useState,useEffect } from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import {Helloworld} from './components/Helloworld';
import './App.css'
import { Courses } from './pages/Courses';
import { Content } from './pages/Content';

function App() {
 

  return (
    <>
     <div className="" >
      <Router>

        <Routes>
          <Route path="/helloworld" element={<Helloworld/>}></Route>
          <Route path="/courses" element={<Courses/>}></Route>
          <Route path="/content/:id" element={<Content/>}></Route>

        </Routes>
        
      </Router>
     </div>
    </>
  )
}

export default App
