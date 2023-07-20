import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './pages/Register';
import Login from './pages/Login';
import Listings from './pages/Listing';
import Header from './components/Header';
import Footer from './components/Footer';
import { AuthProvider } from './components/Authprovider';
import ProtectedRoute from './components/AuthRoute'; 
import CreateGigForm from './pages/createListing';

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Header/>
      <Routes>
        <Route path="/create" element={<CreateGigForm/>}/>
        <Route exact path="/" element={<Listings/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<RegisterForm/>} />
      </Routes>
      <Footer/>
      </AuthProvider>
    </Router>
  );
};

export default App;
