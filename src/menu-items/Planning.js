// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const Planning = {
  id: 'planning',
  title: 'Planning',
  type: 'group',

  children: [
    {
      id: 'NewCollection',
      title: 'Collections ',
      type: 'item',
      url: '/Planning/NewCollection', // Relative URL
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    },
    {
      id: 'NewDesign',
      title: 'Create New Design ',
      type: 'item',
      url: '/Planning/NewDesign', // Relative URL
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    },
    {
      id: 'PlanningProcess',
      title: 'Create New Process ',
      type: 'item',
      url: '/Planning/PlanningProcess', // Relative URL
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    }
  ]
};

export default Planning;
