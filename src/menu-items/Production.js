// assets
import {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
} from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const Production = {
  id: 'Production',
  // title: 'Planning Process',
  caption: 'Start a New Process',

  type: 'group',

  children: [
    {
      // id: 'Planning',
      title: 'Production',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'TermsandConditions',
          title: 'Terms and Conditions ',
          type: 'item',
          url: '/Production/TermsandConditions', // Relative URL
          // icon: icons.IconBrandChrome,
          breadcrumbs: false
        }
      ]
    }
  ]
};

export default Production;
