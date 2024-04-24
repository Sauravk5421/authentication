import React, { useState } from 'react';
import '../styles/App.css'
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import LandingScreen from './LandingScreen.js';
import LoginScreen from './LoginScreen.js';
import SignUpScreen from './SignUpScreen.js';
import Profile from './Profile';

const AppMain = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  return (
    <div id='App'>
      <Router>
        <Routes>
          <Route path="/" element={<LandingScreen/>}></Route>
          <Route path="/login" element={loggedIn ? <Navigate to="/profile" /> : <LoginScreen email={email} password={password} setLoggedIn={setLoggedIn} />} />
          <Route path="/signUp" element={loggedIn ? <Navigate to="/login" /> : <SignUpScreen nameChange={setName} emailChange={setEmail} passwordChange={setPassword} />} />
          <Route path="/profile" element={!loggedIn ? <Navigate to="/login" /> : <Profile email={email} name={name} setLoggedIn={setLoggedIn} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppMain;
