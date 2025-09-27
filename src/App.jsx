import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PropertiesPage from "./pages/PropertiesPage";
import PropertyDetail from "./pages/PropertyDetail";
import Agents from "./pages/Agents";        
import AgentDetail from "./pages/AgentDetail"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/property/:id" element={<PropertyDetail />} />
        <Route path="/agents" element={<Agents />} />   {/* lowercase route is better */}
        <Route path="/agent/:id" element={<AgentDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
