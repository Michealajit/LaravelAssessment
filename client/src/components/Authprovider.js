// AuthContext.js
import React, { createContext, useEffect, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(()=>{
    if(localStorage.getItem('user')){
      setIsAuthenticated(true) ;
    }

  },[]);
  // You can add your authentication logic here and update the isAuthenticated state accordingly.

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
