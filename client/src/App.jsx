import { useState,useEffect } from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import {Helloworld} from './components/Helloworld';
import './App.css'

function App() {
 

  return (
    <>
     <div>
      <Router>

        <Routes>
          <Route path="/helloworld" element={<Helloworld/>}></Route>
        </Routes>
        
      </Router>
     </div>
    </>
  )
}

export default App
