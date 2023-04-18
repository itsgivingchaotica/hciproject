import React, { useState } from 'react'
import './App.css'

import Navbar from "./components/navbar/Navbar.jsx";
import ResourcesPage from "./ResourcesPage";
import HomePage from "./HomePage";

import {Routes, Route} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import accordionItems from "./accordionItems.json";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/resources-page" element={<ResourcesPage accordionItems={accordionItems}/>}/>
        </Routes>
    </div>
  )
}

export default App
