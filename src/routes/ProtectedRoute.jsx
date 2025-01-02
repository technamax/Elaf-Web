// // ProtectedRoute.js
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { isAuthenticated } from './authUtils';

// const ProtectedRoute = ({ element: Component, ...rest }) => {
//   return isAuthenticated() ? <Component {...rest} /> : <Navigate to="/" />;
// };

// export default ProtectedRoute;

// ProtectedRoute.js
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { isAuthenticated } from './authUtils';
// import { useUser } from 'context/User';

// // const allowedRoutes = [
// //   '/dashboard',
// //   '/profile',
// //   '/'
// //   // Add other allowed routes here
// // ];

// const ProtectedRoute = ({ element: Component, ...rest }) => {
//   const { user } = useUser();

//   const allowedRoutes = [
//     '/dashboard',
//     '/'
//     // Add other allowed routes here
//   ];
//   const currentPath = window.location.pathname; // Get the current path

//   if (!isAuthenticated()) {
//     // If the user is not authenticated, redirect to the login page
//     return <Navigate to="/" />;
//   }

//   if (!allowedRoutes.includes(currentPath)) {
//     // If the current path is not in allowedRoutes, redirect to Access Denied
//     return <Navigate to="/access-denied" />;
//   }
//   console.log('user[protectedroute', user);

//   // If authenticated and route is allowed, render the component
//   return <Component {...rest} />;
// };

// export default ProtectedRoute;

import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from './authUtils';
import { useUser } from 'context/User';
import axios from 'axios';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { user } = useUser();
  const [allowedRoutes, setAllowedRoutes] = useState(['/dashboard', '/']);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubMenuLinks = async () => {
      try {
        const empId = user.empId; // Replace this with the actual employee ID as needed
        const response = await axios.get(
          `http://100.42.177.77:83/api/Menu/GetUserSubMenuByEmpId?empId=${empId}`
        );
        // console.log('GetUserSubMenuByEmpId', response.data.result);
        if (response.data.success) {
          const links = response.data.result.map((item) => item.link);
          setAllowedRoutes((prevRoutes) => [...prevRoutes, ...links]);
        }
      } catch (error) {
        console.error('Error fetching sub menu links:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSubMenuLinks();
  }, []);

  const currentPath = window.location.pathname; // Get the current path

  if (loading) {
    // Optionally render a loading state
    return <div>Loading...</div>;
  }

  if (!isAuthenticated()) {
    // If the user is not authenticated, redirect to the login page
    return <Navigate to="/" />;
  }

  if (!allowedRoutes.includes(currentPath)) {
    // If the current path is not in allowedRoutes, redirect to Access Denied
    return <Navigate to="/access-denied" />;
  }

  // console.log('user[protectedroute', user);
  // console.log('allowedRoutes userprotectedroute', allowedRoutes);

  // If authenticated and route is allowed, render the component
  return <Component {...rest} />;
};

export default ProtectedRoute;
