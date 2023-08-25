
// src/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a context for authentication
const AuthContext = createContext();

// Custom hook to access the authentication context
export const useAuth = () => useContext(AuthContext);

export const GameContext = ({ children }) => {
  // State to track if the user is authenticated
  const [authenticated, setAuthenticated] = useState(false);

  // Function to toggle authentication status
  const toggleAuth = () => {
    setAuthenticated(!authenticated);
  };

  // Check local storage for authentication status on initial load
  useEffect(() => {
    const storedAuth = localStorage.getItem('authenticated');
    if (storedAuth) {
      setAuthenticated(JSON.parse(storedAuth));
    }
  }, []);

  // Update local storage whenever authentication status changes
  useEffect(() => {
    localStorage.setItem('authenticated', JSON.stringify(authenticated));
  }, [authenticated]);

  return (
    <AuthContext.Provider value={{ authenticated, toggleAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
