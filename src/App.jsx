import React from "react";
import { Routes, Route } from "react-router-dom";
import  Home from './pages/Home.jsx'
import Navbar from "./components/Navbar.jsx";
import Education from "./pages/Education.jsx";
import Experience from "./pages/Experience.jsx";
function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    
     <Route path="/" element={<Home />} />
     <Route path="/education"  element={<Education/>}/>
     <Route path="/experience" element={<Experience/>}/>
   </Routes>
   </>
  );
}

export default App;
