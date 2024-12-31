// import React from 'react';
// import ReactDOM from 'react-dom';
// import {
//   RouterProvider,
//   createBrowserRouter,
//   Routes,
//   Route,
//   BrowserRouter
// } from 'react-router-dom';
// import MainRoutes from './MainRoutes';
// import AuthenticationRoutes from './AuthenticationRoutes';

// const router = createBrowserRouter([AuthenticationRoutes, MainRoutes], {
//   basename: ''
// });

// console.log(router.basename);

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter basename="/Elaf">
//       <RouterProvider router={router} />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// export default router;
// index.jsx
// index.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import {
  RouterProvider,
  createBrowserRouter,
  BrowserRouter
} from 'react-router-dom';
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import ProtectedRoute from './ProtectedRoute'; // Import the updated ProtectedRoute component
import AccessDenied from './../AccessDenied';
import MainLayout from 'layout/MainLayout';

const router = createBrowserRouter(
  [
    {
      path: '/access-denied',
      element: <AccessDenied /> // Define the access denied route
    },
    ...AuthenticationRoutes.children,
    {
      path: '/',
      element: <ProtectedRoute element={MainLayout} />,
      children: MainRoutes.children // Use MainRoutes.children to access all child routes
    }
    // Access children array here
  ],
  {
    basename: ''
  }
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/Elaf">
      <RouterProvider router={router} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

export default router;
