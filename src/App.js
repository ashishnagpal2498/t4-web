import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import Users from './components/Users';
import UserDetails from './components/UserDetails';


const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Users />} />
          <Route path="/:id" element={<UserDetails />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

