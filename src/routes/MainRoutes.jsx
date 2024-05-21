/* eslint-disable prettier/prettier */
import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
// import { element } from 'prop-types';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard')));

const PlanningNewCollection = Loadable(
  lazy(() => import('views/Planning/NewCollection'))
);
const PlanningNewDesign = Loadable(
  lazy(() => import('views/Planning/NewDesign'))
);
const PlanningProcess = Loadable(
  lazy(() => import('views/Planning/PlanningProcess'))
);

const UserManagementRoles = Loadable(
  lazy(() => import('views/UserManagement/Roles'))
);
const UserManagementApplication = Loadable(
  lazy(() => import('views/UserManagement/Application'))
);

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      element: <DashboardDefault />

      // children: [
      //   {
      //     path: 'default',
      //     element: <DashboardDefault />
      //   }
      // ]
    },
    {
      path: 'UserManagement',
      children: [
        {
          path: 'Role', // Relative path
          element: <UserManagementRoles />
        },
        {
          path: 'Application', // Relative path
          element: <UserManagementApplication />
        }
      ]
    },

    {
      path: 'Planning',
      children: [
        {
          path: 'NewCollection', // Relative path
          element: <PlanningNewCollection />
        },
        {
          path: 'NewDesign', // Relative path
          element: <PlanningNewDesign />
        },
        {
          path: 'PlanningProcess', // Relative path
          element: <PlanningProcess />
        }
      ]
    },

    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
