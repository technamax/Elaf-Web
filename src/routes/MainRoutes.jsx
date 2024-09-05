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
const TermsandConditions = Loadable(
  lazy(() => import('views/Configuration/TermsandConditions'))
);
const ProductionBatch = Loadable(
  lazy(() => import('views/Production/ProductionBatch'))
);
const FabricationSelectionIssuance = Loadable(
  lazy(() => import('views/Production/FabricationSelectionIssuance'))
);
const ReceivingFromBX = Loadable(
  lazy(() => import('views/Production/ReceivingFromBX'))
);
const Receiving = Loadable(lazy(() => import('views/Production/Receiving')));
const Issuance = Loadable(lazy(() => import('views/Production/Issuance')));
// const EmbroideryIssuance = Loadable(
//   lazy(() => import('views/Production/EmbroideryIssuance'))
// );
// const SchiffiliIssuance = Loadable(
//   lazy(() => import('views/Production/SchiffiliIssuance'))
// );
// const AdditionalProcessIssuance = Loadable(
//   lazy(() => import('views/Production/AdditionalProcessIssuance'))
// );
const ProductionReceiving = Loadable(
  lazy(() => import('views/Production/ProductionReceiving'))
);
const ShrinkageWastageConfiguration = Loadable(
  lazy(() => import('views/Configuration/ShrinkageWastageConfiguration'))
);
const POGeneration = Loadable(
  lazy(() => import('views/Production/POGeneration'))
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
      path: 'Production',
      children: [
        {
          path: 'ProductionBatch',
          element: <ProtectedRoute element={ProductionBatch} />
        },
        {
          path: 'ReceivingFromBX',
          element: <ProtectedRoute element={ReceivingFromBX} />
        },
        {
          path: 'Receiving',
          element: <ProtectedRoute element={Receiving} />
        },
        {
          path: 'FabricationSelectionIssuance',
          element: <ProtectedRoute element={FabricationSelectionIssuance} />
        },
        {
          path: 'Issuance',
          element: <ProtectedRoute element={Issuance} />
        },
        // {
        //   path: 'EmbroideryIssuance',
        //   element: <ProtectedRoute element={EmbroideryIssuance} />
        // },
        // {
        //   path: 'SchiffiliIssuance',
        //   element: <ProtectedRoute element={SchiffiliIssuance} />
        // },
        // {
        //   path: 'AdditionalProcessIssuance',
        //   element: <ProtectedRoute element={AdditionalProcessIssuance} />
        // },
        {
          path: 'ProductionReceiving',
          element: <ProtectedRoute element={ProductionReceiving} />
        },
        {
          path: 'POGeneration',
          element: <ProtectedRoute element={POGeneration} />
        }
      ]
    },
    {
      path: 'Configuration',
      children: [
        {
          path: 'ShrinkageWastageConfiguration',
          element: <ProtectedRoute element={ShrinkageWastageConfiguration} />
        },
        {
          path: 'TermsandConditions',
          element: <ProtectedRoute element={TermsandConditions} />
        }
        // {
        //   path: 'ProductionBatch',
        //   element: <ProtectedRoute element={ProductionBatch} />
        // },
      ]
    },
    {
      path: 'sample-page',
      element: <ProtectedRoute element={SamplePage} />
    },
    {
      path: 'welcome',
      element: <ProtectedRoute element={WelcomePage} />
    }
  ]
};

export default MainRoutes;
