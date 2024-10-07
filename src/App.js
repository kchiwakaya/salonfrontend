import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './header';
import StyleForm from './StyleForm';
import AppointmentBooking from './Booking';
// import DataDisplay from './Load';  // Import the DataDisplay component
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Register';
import LoginForm from './Login';
//import Stylists from './Stylists';
import DataDisplay from './Load';
import StylistsList from './Stylists';
import Footer from './footer';
const App = () => {
  return (
    <Router>
      <div>
        <Header />
      
        <Routes>
          <Route path="/" element={<StylistsList/>} />
          <Route path="/load/:id" element={<DataDisplay />} />
          <Route path="/add-style" element={<StyleForm />} />
          <Route path="/book-appointment/:id" element={<AppointmentBooking />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginForm />} />
          
          
         
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;


