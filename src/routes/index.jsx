import React from 'react';
import ReactDOM from 'react-dom';
import {
  RouterProvider,
  createBrowserRouter,
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

const router = createBrowserRouter([AuthenticationRoutes, MainRoutes], {
  basename: ''
});

console.log(router.basename);

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/*" element={<AuthenticationRoutes />} />
//         <Route path="/dashboard/*" element={<MainRoutes />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
export default router;
