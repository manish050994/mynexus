import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNexusLandingPage from "./pages/Home/MyNexusLandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyNexusLandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
