import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import './App.css';
import ImmunityBoosters from './cp/Imunity_boosters';
import HomePage from './cp/Homepage';
import Navbar from './cp/navbar';
import LoginForm from './cp/Login';
import RegistrationForm from './cp/Register';
import AboutUs from './cp/AboutUs';
import Drives from './cp/Drives';
import Booking from './cp/Bookings';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes> {/* Use Routes instead of Route */}
          <Route path="/" element={<HomePage />} /> {/* Use element prop instead of component */}
          <Route path="/immunity-boosters" element={<ImmunityBoosters />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/drive" element={<Drives/>} />
          <Route path="/booking" element={<Booking/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
