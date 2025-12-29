import React from "react";
import { Routes, Route } from "react-router-dom";
import  Home from './pages/Home.jsx'
import Navbar from "./components/Navbar.jsx";
import Education from "./pages/Education.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import Coding from "./pages/Coding.jsx";
function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    
     <Route path="/" element={<Home />} />
     <Route path="/education"  element={<Education/>}/>
     <Route path="/experience" element={<Experience/>}/>
     <Route path="/projects" element={<Projects/>}/>
     <Route path="/skills" element={<Skills/>}/>
     <Route path="/coding" element={<Coding/>}/>
   </Routes>
   </>
  );
}

export default App;
