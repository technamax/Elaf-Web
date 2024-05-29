import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';

const router = createBrowserRouter([AuthenticationRoutes, MainRoutes], {
  basename: ''
});

console.log(router.basename);

export default router;
