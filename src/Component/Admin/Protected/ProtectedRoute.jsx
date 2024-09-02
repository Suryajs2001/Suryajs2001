// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//   const token = localStorage.getItem('token');
//   if (!token) {
//     return <Navigate to="/adminlogin" />;
//   }
//   return children;
// };

// export default ProtectedRoute;

import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');

  useEffect(() => {
    // Clear token after rendering the protected component
    if (token) {
      localStorage.removeItem('token');
    }
  }, [token]);

  if (!token) {
    return <Navigate to="/adminlogin" />;
  }

  return children;
};

export default ProtectedRoute;
