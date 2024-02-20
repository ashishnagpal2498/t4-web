import React, { createContext, useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false);
  const navigate = useNavigate();
  const login = async (userData) => {

    setLoading(true);
    try {
        const result = await axios.post("https://express-t4.onrender.com/api/login",{
            ...userData
        },{  "Content-Type": "application/json"});

        if(result.status === 200)
        {   setSuccessMessage(true);
            setUser({username:userData.username});
            setTimeout(() => {
                setSuccessMessage(false);
                navigate("/")
            },2000)
            
        }
    } catch (error) {
        setError("Invalid Username or Password")
        setTimeout(() => setError(null),5000)
    } finally {
        setTimeout(() => {
            setLoading(false)
        },2000)
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, error, loading, successMessage}}>
      {children}
    </AuthContext.Provider>
  );
};
