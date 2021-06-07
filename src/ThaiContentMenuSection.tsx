import React from 'react';
import type { MenuSectionType } from './types';
import ThaiContentMenuSectionItem from './ThaiContentMenuSectionItem';

export interface ThaiContentMenuSectionProps {
  section: MenuSectionType;
}

const ThaiContentMenuSection: React.FC<ThaiContentMenuSectionProps> = ({
  section
}) => {
  return (
    <div>
      <div>{section.sectionName}</div>
      {section.menuItems.map((menuItem) => (
        <ThaiContentMenuSectionItem
          key={menuItem.en_labelNarrow[0]}
          menuItem={menuItem}
        />
      ))}
    </div>
  );
};

export default ThaiContentMenuSection;
