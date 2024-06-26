import { lazy } from 'react';
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import ProtectedRoute from './ProtectedRoute';

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
const UserManagementMainMenu = Loadable(
  lazy(() => import('views/UserManagement/MainMenu'))
);
const UserManagementSubMenu = Loadable(
  lazy(() => import('views/UserManagement/SubMenu'))
);
const UserManagementUsers = Loadable(
  lazy(() => import('views/UserManagement/Users'))
);
const PrePlanningCreation = Loadable(
  lazy(() => import('views/Planning/PrePlanningCreation'))
);
const SamplePage = Loadable(lazy(() => import('views/sample-page')));
const WelcomePage = Loadable(lazy(() => import('views/welcome/WelcomePage')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'dashboard',
      element: <ProtectedRoute element={DashboardDefault} />
    },
    {
      path: 'UserManagement',
      children: [
        {
          path: 'Role',
          element: <ProtectedRoute element={UserManagementRoles} />
        },
        {
          path: 'Application',
          element: <ProtectedRoute element={UserManagementApplication} />
        },
        {
          path: 'MainMenu',
          element: <ProtectedRoute element={UserManagementMainMenu} />
        },
        {
          path: 'SubMenu',
          element: <ProtectedRoute element={UserManagementSubMenu} />
        },
        {
          path: 'Users',
          element: <ProtectedRoute element={UserManagementUsers} />
        }
      ]
    },
    {
      path: 'Planning',
      children: [
        {
          path: 'NewCollection',
          element: <ProtectedRoute element={PlanningNewCollection} />
        },
        {
          path: 'NewDesign',
          element: <ProtectedRoute element={PlanningNewDesign} />
        },
        {
          path: 'PlanningProcess',
          element: <ProtectedRoute element={PlanningProcess} />
        },
        {
          path: 'PrePlanningCreation',
          element: <ProtectedRoute element={PrePlanningCreation} />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <ProtectedRoute element={SamplePage} />
    },
    {
      path: 'welcome',
      element: <ProtectedRoute element={WelcomePage} /> // Add the welcome page route
    }
  ]
};

export default MainRoutes;
