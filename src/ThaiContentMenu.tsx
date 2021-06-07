import React from 'react';
import useMenuItems from './useMenuItems';
import { Alert } from '@material-ui/lab';
import ThaiContentMenuSection from './ThaiContentMenuSection';

import { menuItemsListToSectionsList } from './menuUtil';

const ThaiContentMenu: React.FC = () => {
  const [error, menuJSON] = useMenuItems();

  console.log({ menuJSON });
  const sections = menuItemsListToSectionsList(
    menuJSON ? menuJSON.menuItems : []
  );

  return (
    <div>
      {error && <Alert severity="error">{error}</Alert>}
      {sections.map((section) => (
        <ThaiContentMenuSection key={section.sectionName} section={section} />
      ))}
    </div>
  );
};

export default ThaiContentMenu;
