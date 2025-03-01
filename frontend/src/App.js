import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import Login from "./Pages/LoginPage";
import Chatbot from "./Pages/ChatbotPage"; // Import Chatbot Component
import Docthea from "./Pages/DoctheaPage";
import PrescriptionUpload from "./Pages/PrescriptionUploadPage";

function App() {
  return (
    <div className="App">
      <Router basename="/health-plus">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/features" element={<Docthea />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chatbot" element={<Chatbot />} /> {/* Chatbot Route */}
          <Route path="/prescriptionupload" element={<PrescriptionUpload />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
