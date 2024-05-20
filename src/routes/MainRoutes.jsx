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
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
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
