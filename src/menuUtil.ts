import type { MenuItemListType, MenuSectionListType } from './types';

type MenuMappingType = {
  [menuItemType: string]: MenuItemListType;
};

const menuItemsListToSectionsList = (
  menu: MenuItemListType
): MenuSectionListType => {
  const sections = menu.reduce((sectionMap, item) => {
    return item.menuItemTypes.reduce((map, itemType) => {
      map[itemType] = map[itemType] || [];
      map[itemType].push(item);
      return map;
    }, sectionMap);
  }, [] as unknown as MenuMappingType);

  return Object.keys(sections).reduce((prev, key) => {
    prev.push({
      sectionName: key,
      menuItems: sections[key]
    });
    return prev;
  }, [] as MenuSectionListType);
};

export { menuItemsListToSectionsList };
