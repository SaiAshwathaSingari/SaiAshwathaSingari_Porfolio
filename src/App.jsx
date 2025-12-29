import React from "react";
import { Routes, Route } from "react-router-dom";
import  Home from './pages/Home.jsx'
import Navbar from "./components/Navbar.jsx";
import Education from "./pages/Education.jsx";
function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    
     <Route path="/" element={<Home />} />
     <Route path="/education"  element={<Education/>}/>
   </Routes>
   </>
  );
}

export default App;
