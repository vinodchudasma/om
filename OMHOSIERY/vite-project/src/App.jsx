import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

// Import components
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Shop from "./component/Shop";
import About from "./component/About";
import Content from "./component/Content";
import Login from "./component/Login";

function ProtectedRoutes() {
  const user = localStorage.getItem("data"); // Check if user is logged in
  return user ? <Navbar /> : <Navigate to="/" replace />; // Show Navbar if logged in, else redirect to login
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<ProtectedRoutes />}>
          <Route path="home" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="content" element={<Content />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
